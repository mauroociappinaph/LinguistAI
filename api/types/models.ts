/**
 * Tipos para modelos de AI y configuración
 */

/**
 * Modelos de Gemini disponibles
 */
export type GeminiModel =
  | 'gemini-3-pro-preview'
  | 'gemini-2.5-flash'
  | 'gemini-2.5-flash-preview-tts';

/**
 * Voces disponibles para TTS
 */
export type VoiceName =
  | 'Kore'
  | 'Aoede'
  | 'Charon'
  | 'Fenrir'
  | 'Puck';

/**
 * Mensaje de chat en formato Gemini
 */
export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

/**
 * Configuración de chat
 */
export interface ChatConfig {
  model: GeminiModel;
  systemInstruction?: string;
}
