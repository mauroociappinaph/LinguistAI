/**
 * Response types para todos los endpoints
 */

/**
 * Response para chat (normal y roleplay)
 */
export interface ChatResponse {
  text: string;
}

/**
 * Breakdown de análisis de pronunciación
 */
export interface PronunciationBreakdown {
  grammar: number;
  clarity: number;
  relevance: number;
}

/**
 * Response para análisis de pronunciación
 */
export interface PronunciationResponse {
  score: number;
  feedback: string;
  breakdown: PronunciationBreakdown;
}

/**
 * Response para generación de TTS
 */
export interface TTSResponse {
  audio: string; // base64
}

/**
 * Response para análisis de imágenes
 */
export interface VisionResponse {
  text: string;
}

/**
 * Response para búsquedas
 */
export interface SearchResponse {
  text: string;
  sources?: string[];
}

/**
 * Corrección individual de gramática
 */
export interface GrammarCorrection {
  original: string;
  corrected: string;
  explanation: string;
}

/**
 * Response para corrección gramatical
 */
export interface GrammarResponse {
  correctedText: string;
  corrections: GrammarCorrection[];
}

/**
 * Response de error estándar
 */
export interface ErrorResponse {
  error: string;
  message?: string;
  stack?: string;
}
