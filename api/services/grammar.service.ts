import { getGeminiClient, getGroqClient } from '../clients/index.js';
import { GrammarRequest, GrammarResponse } from '../types/index.js';
import { MODELS, createGrammarPrompt } from '../config/index.js';

/**
 * Servicios para corrección gramatical
 * Contiene la lógica de negocio separada de las rutas
 * Incluye fallback automático a Groq cuando Gemini excede cuota
 */

/**
 * Detecta si un error es de rate limit o cuota excedida
 */
function isRateLimitError(error: any): boolean {
  if (error?.status === 429 || error?.error?.code === 429) return true;
  const message = error?.message || error?.error?.message || '';
  return message.toLowerCase().includes('quota') ||
         message.toLowerCase().includes('rate limit') ||
         message.toLowerCase().includes('resource_exhausted') ||
         message.toLowerCase().includes('too many requests');
}

/**
 * Corrige gramática usando Groq como fallback
 */
async function checkGrammarWithGroq(request: GrammarRequest): Promise<GrammarResponse> {
  const groq = getGroqClient();

  const prompt = `You are a grammar correction assistant. Analyze the following text and provide corrections in JSON format.

Text to analyze: "${request.text}"

Return a JSON object with this exact structure:
{
  "correctedText": "the corrected version of the text",
  "corrections": [
    {
      "original": "incorrect word/phrase",
      "corrected": "correct word/phrase",
      "explanation": "brief explanation of the correction"
    }
  ]
}

If the text has no errors, return the same text in correctedText and an empty corrections array.`;

  const response = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: 'You are a grammar correction expert. Always respond with valid JSON.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.3,
    response_format: { type: 'json_object' }
  });

  const content = response.choices[0]?.message?.content || '{}';
  return JSON.parse(content) as GrammarResponse;
}

/**
 * Corrige gramática de un texto usando Gemini (con fallback a Groq)
 * @param request - Request validado de gramática
 * @returns Response con texto corregido y correcciones
 */
export async function checkGrammar(request: GrammarRequest): Promise<GrammarResponse> {
  try {
    console.log('[Grammar Service] Attempting Gemini...');
    const ai = getGeminiClient();

    const prompt = createGrammarPrompt(request.text);

    const response = await ai.models.generateContent({
      model: MODELS.GRAMMAR,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const result = JSON.parse(response.text || '{}') as GrammarResponse;
    console.log('[Grammar Service] Gemini success');
    return result;
  } catch (error) {
    // Si es rate limit, hacer fallback a Groq
    if (isRateLimitError(error)) {
      console.warn('[Grammar Service] Gemini rate limit detected, falling back to Groq...');

      try {
        const response = await checkGrammarWithGroq(request);
        console.log('[Grammar Service] Groq fallback success');
        return response;
      } catch (groqError) {
        console.error('[Grammar Service] Groq fallback also failed:', groqError);
        throw groqError;
      }
    }

    // Re-lanzar otros errores que no sean rate limit
    throw error;
  }
}
