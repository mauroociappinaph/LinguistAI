import Groq from 'groq-sdk';

/**
 * Cliente de Groq - Singleton
 * La API key se obtiene de las variables de entorno del servidor
 */

let groqClient: Groq | null = null;

/**
 * Obtiene la instancia del cliente de Groq (Singleton)
 * @returns Cliente de Groq configurado
 * @throws Error si GROQ_API_KEY no está configurada
 */
export const getGroqClient = (): Groq => {
  if (!groqClient) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('GROQ_API_KEY no está configurada en las variables de entorno');
    }
    groqClient = new Groq({ apiKey });
  }
  return groqClient;
};
