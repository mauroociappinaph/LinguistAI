import { getGeminiClient, getPerplexityClient } from '../clients/index.js';
import { SearchRequest, SearchResponse } from '../types/index.js';
import { MODELS, createSearchPrompt } from '../config/index.js';

/**
 * Servicios para búsquedas semánticas
 * Contiene la lógica de negocio separada de las rutas
 * Incluye fallback automático a Perplexity cuando Gemini excede cuota
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
 * Realiza búsqueda usando Perplexity como fallback
 */
async function searchWithPerplexity(request: SearchRequest): Promise<SearchResponse> {
  const perplexity = getPerplexityClient();

  const systemPrompt = request.context
    ? `You are a helpful search assistant. Context: ${request.context}. Provide accurate and relevant information.`
    : 'You are a helpful search assistant. Provide accurate and relevant information.';

  const response = await perplexity.chat.completions.create({
    model: 'llama-3.1-sonar-small-128k-online',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: request.query }
    ],
    temperature: 0.2,
    max_tokens: 1024
  });

  return {
    text: response.choices[0]?.message?.content || ''
  };
}

/**
 * Realiza una búsqueda semántica usando Gemini (con fallback a Perplexity)
 * @param request - Request validado de búsqueda
 * @returns Response con resultados de la búsqueda
 */
export async function searchContent(request: SearchRequest): Promise<SearchResponse> {
  try {
    console.log('[Search Service] Attempting Gemini...');
    const ai = getGeminiClient();

    const prompt = createSearchPrompt(request.query, request.context);

    const response = await ai.models.generateContent({
      model: MODELS.SEARCH,
      contents: prompt,
    });

    console.log('[Search Service] Gemini success');
    return { text: response.text || '' };
  } catch (error) {
    // Si es rate limit, hacer fallback a Perplexity
    if (isRateLimitError(error)) {
      console.warn('[Search Service] Gemini rate limit detected, falling back to Perplexity...');

      try {
        const response = await searchWithPerplexity(request);
        console.log('[Search Service] Perplexity fallback success');
        return response;
      } catch (perplexityError) {
        console.error('[Search Service] Perplexity fallback also failed:', perplexityError);
        throw perplexityError;
      }
    }

    // Re-lanzar otros errores que no sean rate limit
    throw error;
  }
}
