import { GoogleGenAI } from '@google/genai';

/**
 * Cliente de Gemini AI - Singleton
 * La API key se obtiene de las variables de entorno del servidor
 */

let geminiClient: GoogleGenAI | null = null;

/**
 * Obtiene la instancia del cliente de Gemini (Singleton)
 * @returns Cliente de Gemini configurado
 * @throws Error si GEMINI_API_KEY no está configurada
 */
export const getGeminiClient = (): GoogleGenAI => {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY no está configurada en las variables de entorno');
    }
    geminiClient = new GoogleGenAI({ apiKey });
  }
  return geminiClient;
};
