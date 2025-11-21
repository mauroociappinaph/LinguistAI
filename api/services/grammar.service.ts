import { getGeminiClient } from '../clients/index.js';
import { GrammarRequest, GrammarResponse } from '../types/index.js';
import { MODELS, createGrammarPrompt } from '../config/index.js';

/**
 * Servicios para corrección gramatical
 * Contiene la lógica de negocio separada de las rutas
 */

/**
 * Corrige gramática de un texto usando Gemini
 * @param request - Request validado de gramática
 * @returns Response con texto corregido y correcciones
 */
export async function checkGrammar(request: GrammarRequest): Promise<GrammarResponse> {
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
  return result;
}
