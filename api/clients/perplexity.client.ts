import OpenAI from 'openai';

/**
 * Cliente de Perplexity - Singleton
 * Perplexity usa la API compatible con OpenAI
 * La API key se obtiene de las variables de entorno del servidor
 */

let perplexityClient: OpenAI | null = null;

/**
 * Obtiene la instancia del cliente de Perplexity (Singleton)
 * @returns Cliente de Perplexity configurado
 * @throws Error si PERPLEXITY_API_KEY no está configurada
 */
export const getPerplexityClient = (): OpenAI => {
  if (!perplexityClient) {
    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      throw new Error('PERPLEXITY_API_KEY no está configurada en las variables de entorno');
    }
    perplexityClient = new OpenAI({
      apiKey,
      baseURL: 'https://api.perplexity.ai'
    });
  }
  return perplexityClient;
};
