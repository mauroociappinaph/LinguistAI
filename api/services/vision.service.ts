import { getGeminiClient } from '../clients/index.js';
import { VisionRequest, VisionResponse } from '../types/index.js';
import { MODELS, createVisionPrompt } from '../config/index.js';

/**
 * Servicios para análisis de imágenes
 * Contiene la lógica de negocio separada de las rutas
 */

/**
 * Analiza una imagen usando Gemini Vision
 * @param request - Request validado de visión
 * @returns Response con descripción de la imagen
 */
export async function analyzeImage(request: VisionRequest): Promise<VisionResponse> {
  const ai = getGeminiClient();

  const prompt = createVisionPrompt(request.prompt);

  const response = await ai.models.generateContent({
    model: MODELS.VISION,
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: request.imageData
            }
          }
        ]
      }
    ]
  });

  return { text: response.text || '' };
}
