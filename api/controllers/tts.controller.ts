import { Request, Response } from 'express';
import { validateTTSRequest, ValidationError } from '../validators/index.js';
import { generateSpeech } from '../services/index.js';

/**
 * Controllers para endpoints de TTS
 * Manejan la interacción entre Express (req/res) y los servicios
 */

/**
 * Handler para generación de TTS
 */
export async function handleTTS(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validateTTSRequest(req.body);

    // Llamar al servicio
    const response = await generateSpeech(validatedRequest);

    // Enviar respuesta
    res.json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message });
      return;
    }
    throw error; // El errorHandler middleware lo manejará
  }
}
