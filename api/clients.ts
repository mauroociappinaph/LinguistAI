import { GoogleGenAI } from '@google/genai';
import Groq from 'groq-sdk';

/**
 * Cliente de Gemini AI - Singleton
 * La API key se obtiene de las variables de entorno del servidor
 */
let geminiClient: GoogleGenAI | null = null;

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

/**
 * Cliente de Groq - Singleton
 * La API key se obtiene de las variables de entorno del servidor
 */
let groqClient: Groq | null = null;

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
