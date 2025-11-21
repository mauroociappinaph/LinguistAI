import { GeminiModel } from '../types/models.js';

/**
 * Configuración centralizada de modelos de AI
 * Facilita el cambio de modelos en un solo lugar
 */

export const MODELS: Record<string, GeminiModel> = {
  CHAT: 'gemini-3-pro-preview',
  ROLEPLAY: 'gemini-3-pro-preview',
  PRONUNCIATION: 'gemini-2.5-flash',
  TTS: 'gemini-2.5-flash-preview-tts',
  VISION: 'gemini-2.5-flash',
  SEARCH: 'gemini-2.5-flash',
  GRAMMAR: 'gemini-2.5-flash',
} as const;

/**
 * Configuración de voces para TTS
 */
export const DEFAULT_VOICE = 'Kore';

/**
 * Configuración de rate limiting
 */
export const RATE_LIMIT = {
  GENERAL: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutos
    MAX_REQUESTS: 100,
  },
  TTS: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutos
    MAX_REQUESTS: 20,
  },
} as const;
