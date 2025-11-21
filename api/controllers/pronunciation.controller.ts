import { Request, Response } from 'express';
import { validatePronunciationRequest, ValidationError } from '../validators/index.js';
import { analyzePronunciation } from '../services/index.js';

/**
 * Controllers para endpoints de pronunciación
 * Manejan la interacción entre Express (req/res) y los servicios
 */

/**
 * Handler para análisis de pronunciación
 */
export async function handlePronunciation(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validatePronunciationRequest(req.body);

    // Llamar al servicio
    const response = await analyzePronunciation(validatedRequest);

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
