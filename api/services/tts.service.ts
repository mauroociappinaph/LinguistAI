import { getGeminiClient } from '../clients/index.js';
import { TTSRequest, TTSResponse } from '../types/index.js';
import { MODELS, DEFAULT_VOICE } from '../config/index.js';
import { Modality } from '@google/genai';

/**
 * Servicios para generación de texto a voz (TTS)
 * Contiene la lógica de negocio separada de las rutas
 */

/**
 * Genera audio a partir de texto usando Gemini TTS
 * @param request - Request validado de TTS
 * @returns Response con audio en base64
 */
export async function generateSpeech(request: TTSRequest): Promise<TTSResponse> {
  const ai = getGeminiClient();

  const voiceName = request.voiceName || DEFAULT_VOICE;

  const response = await ai.models.generateContent({
    model: MODELS.TTS,
    contents: [{ parts: [{ text: request.text }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName },
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

  if (!base64Audio) {
    throw new Error('No audio generated');
  }

  return { audio: base64Audio };
}
