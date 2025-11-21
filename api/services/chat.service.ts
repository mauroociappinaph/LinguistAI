import { getGeminiClient } from '../clients/index.js';
import { ChatRequest, RolePlayRequest, ChatResponse } from '../types/index.js';
import { MODELS, DEFAULT_SYSTEM_INSTRUCTION, createRolePlayInstruction } from '../config/index.js';

/**
 * Servicios para funcionalidad de chat
 * Contiene la lógica de negocio separada de las rutas
 */

/**
 * Envía un mensaje de chat normal a Gemini
 * @param request - Request validado de chat
 * @returns Response con el texto generado
 */
export async function sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
  const ai = getGeminiClient();

  const chat = ai.chats.create({
    model: MODELS.CHAT,
    history: request.history,
    config: {
      systemInstruction: request.systemInstruction || DEFAULT_SYSTEM_INSTRUCTION,
    }
  });

  const response = await chat.sendMessage({ message: request.newMessage });

  return { text: response.text || '' };
}

/**
 * Envía un mensaje de roleplay a Gemini
 * @param request - Request validado de roleplay
 * @returns Response con el texto generado
 */
export async function sendRolePlayMessage(request: RolePlayRequest): Promise<ChatResponse> {
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

  return { text: response.text || '' };
}
