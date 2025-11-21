import { Request, Response } from 'express';
import { validateSearchRequest, ValidationError } from '../validators/index.js';
import { searchContent } from '../services/index.js';

/**
 * Controllers para endpoints de búsqueda
 * Manejan la interacción entre Express (req/res) y los servicios
 */

/**
 * Handler para búsquedas semánticas
 */
export async function handleSearch(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validateSearchRequest(req.body);

    // Llamar al servicio
    const response = await searchContent(validatedRequest);

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
