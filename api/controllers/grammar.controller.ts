import { Request, Response } from 'express';
import { validateGrammarRequest, ValidationError } from '../validators/index.js';
import { checkGrammar } from '../services/index.js';

/**
 * Controllers para endpoints de gramática
 * Manejan la interacción entre Express (req/res) y los servicios
 */

/**
 * Handler para corrección gramatical
 */
export async function handleGrammar(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validateGrammarRequest(req.body);

    // Llamar al servicio
    const response = await checkGrammar(validatedRequest);

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
