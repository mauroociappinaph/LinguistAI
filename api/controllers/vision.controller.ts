import { Request, Response } from 'express';
import { validateVisionRequest, ValidationError } from '../validators/index.js';
import { analyzeImage } from '../services/index.js';

/**
 * Controllers para endpoints de visión
 * Manejan la interacción entre Express (req/res) y los servicios
 */

/**
 * Handler para análisis de imágenes
 */
export async function handleVision(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validateVisionRequest(req.body);

    // Llamar al servicio
    const response = await analyzeImage(validatedRequest);

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
