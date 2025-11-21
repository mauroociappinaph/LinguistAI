import { getGeminiClient } from '../clients/index.js';
import { SearchRequest, SearchResponse } from '../types/index.js';
import { MODELS, createSearchPrompt } from '../config/index.js';

/**
 * Servicios para búsquedas semánticas
 * Contiene la lógica de negocio separada de las rutas
 */

/**
 * Realiza una búsqueda semántica usando Gemini
 * @param request - Request validado de búsqueda
 * @returns Response con resultados de búsqueda
 */
export async function searchContent(request: SearchRequest): Promise<SearchResponse> {
  const ai = getGeminiClient();

  const prompt = createSearchPrompt(request.query, request.context);

  const response = await ai.models.generateContent({
    model: MODELS.SEARCH,
    contents: prompt,
  });

  return { text: response.text || '' };
}
