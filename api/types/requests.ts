import { ChatMessage } from './models.js';

/**
 * Request types para todos los endpoints
 */

/**
 * Request para chat normal
 */
export interface ChatRequest {
  history: ChatMessage[];
  newMessage: string;
  systemInstruction?: string;
}

/**
 * Request para roleplay chat
 */
export interface RolePlayRequest {
  history: ChatMessage[];
  newMessage: string;
  scenarioContext: string;
  aiPersona: string;
}

/**
 * Request para análisis de pronunciación
 */
export interface PronunciationRequest {
  transcript: string;
  context?: string;
}

/**
 * Request para generación de texto a voz (TTS)
 */
export interface TTSRequest {
  text: string;
  voiceName?: string;
}

/**
 * Request para análisis de imágenes
 */
export interface VisionRequest {
  imageData: string; // base64
  prompt?: string;
}

/**
 * Request para búsquedas semánticas
 */
export interface SearchRequest {
  query: string;
  context?: string;
}

/**
 * Request para corrección gramatical
 */
export interface GrammarRequest {
  text: string;
}
