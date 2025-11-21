import { getGeminiClient } from '../clients/index.js';
import { PronunciationRequest, PronunciationResponse } from '../types/index.js';
import { MODELS, createPronunciationPrompt } from '../config/index.js';

/**
 * Servicios para análisis de pronunciación
 * Contiene la lógica de negocio separada de las rutas
 */

/**
 * Analiza la pronunciación de un transcript
 * @param request - Request validado de pronunciación
 * @returns Response con score, feedback y breakdown
 */
export async function analyzePronunciation(
  request: PronunciationRequest
): Promise<PronunciationResponse> {
  const ai = getGeminiClient();

  const prompt = createPronunciationPrompt(request.transcript, request.context);

  const response = await ai.models.generateContent({
    model: MODELS.PRONUNCIATION,
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error('No response from Gemini');
  }

  const result = JSON.parse(text) as PronunciationResponse;
  return result;
}
