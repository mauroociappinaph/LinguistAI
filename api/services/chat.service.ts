import { getGeminiClient, getGroqClient } from '../clients/index.js';
import { ChatRequest, RolePlayRequest, ChatResponse } from '../types/index.js';
import { MODELS, DEFAULT_SYSTEM_INSTRUCTION, createRolePlayInstruction } from '../config/index.js';

/**
 * Servicios para funcionalidad de chat
 * Contiene la lógica de negocio separada de las rutas
 * Incluye fallback automático a Groq cuando Gemini excede cuota
 */

/**
 * Detecta si un error es de rate limit o cuota excedida
 */
function isRateLimitError(error: any): boolean {
  // Detectar error 429
  if (error?.status === 429 || error?.error?.code === 429) return true;

  // Detectar mensajes de quota
  const message = error?.message || error?.error?.message || '';
  return message.toLowerCase().includes('quota') ||
         message.toLowerCase().includes('rate limit') ||
         message.toLowerCase().includes('resource_exhausted') ||
         message.toLowerCase().includes('too many requests');
}

/**
 * Envía un mensaje de chat a Groq como fallback
 */
async function sendChatToGroq(request: ChatRequest): Promise<ChatResponse> {
  const groq = getGroqClient();

  // Convertir formato Gemini → Groq
  const groqMessages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    {
      role: 'system',
      content: request.systemInstruction || DEFAULT_SYSTEM_INSTRUCTION
    },
    ...request.history.map(msg => ({
      role: (msg.role === 'model' ? 'assistant' : msg.role) as 'user' | 'assistant',
      content: msg.parts[0].text
    })),
    { role: 'user' as const, content: request.newMessage }
  ];

  const response = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: groqMessages,
    temperature: 0.7,
    max_tokens: 1024
  });

  return {
    text: response.choices[0]?.message?.content || ''
  };
}

/**
 * Envía un mensaje de chat normal a Gemini (con fallback a Groq)
 * @param request - Request validado de chat
 * @returns Response con el texto generado
 */
export async function sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
  try {
    console.log('[Chat Service] Attempting Gemini...');
    const ai = getGeminiClient();

    const chat = ai.chats.create({
      model: MODELS.CHAT,
      history: request.history,
      config: {
        systemInstruction: request.systemInstruction || DEFAULT_SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: request.newMessage });
    console.log('[Chat Service] Gemini success');

    return { text: response.text || '' };
  } catch (error) {
    // Si es rate limit, hacer fallback a Groq
    if (isRateLimitError(error)) {
      console.warn('[Chat Service] Gemini rate limit detected, falling back to Groq...');

      try {
        const response = await sendChatToGroq(request);
        console.log('[Chat Service] Groq fallback success');
        return response;
      } catch (groqError) {
        console.error('[Chat Service] Groq fallback also failed:', groqError);
        throw groqError;
      }
    }

    // Re-lanzar otros errores que no sean rate limit
    throw error;
  }
}

/**
 * Envía un mensaje de roleplay a Gemini (con fallback a Groq)
 * @param request - Request validado de roleplay
 * @returns Response con el texto generado
 */
export async function sendRolePlayMessage(request: RolePlayRequest): Promise<ChatResponse> {
  try {
    console.log('[RolePlay Service] Attempting Gemini...');
    const ai = getGeminiClient();

    const systemInstruction = createRolePlayInstruction(
      request.aiPersona,
      request.scenarioContext
    );

    const chat = ai.chats.create({
      model: MODELS.ROLEPLAY,
      history: request.history,
      config: {
        systemInstruction,
      }
    });

    const response = await chat.sendMessage({ message: request.newMessage });
    console.log('[RolePlay Service] Gemini success');

    return { text: response.text || '' };
  } catch (error) {
    // Si es rate limit, hacer fallback a Groq
    if (isRateLimitError(error)) {
      console.warn('[RolePlay Service] Gemini rate limit detected, falling back to Groq...');

      try {
        // Convertir roleplay request a chat request para Groq
        const chatRequest: ChatRequest = {
          history: request.history,
          newMessage: request.newMessage,
          systemInstruction: createRolePlayInstruction(
            request.aiPersona,
            request.scenarioContext
          )
        };

        const response = await sendChatToGroq(chatRequest);
        console.log('[RolePlay Service] Groq fallback success');
        return response;
      } catch (groqError) {
        console.error('[RolePlay Service] Groq fallback also failed:', groqError);
        throw groqError;
      }
    }

    // Re-lanzar otros errores que no sean rate limit
    throw error;
  }
}
