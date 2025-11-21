import { Request, Response } from 'express';
import { validateChatRequest, validateRolePlayRequest, ValidationError } from '../validators/index.js';
import { sendChatMessage, sendRolePlayMessage } from '../services/index.js';

/**
 * Controllers para endpoints de chat
 * Manejan la interacción entre Express (req/res) y los servicios
 */

/**
 * Handler para chat normal
 */
export async function handleChat(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validateChatRequest(req.body);

    // Llamar al servicio
    const response = await sendChatMessage(validatedRequest);

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

/**
 * Handler para roleplay chat
 */
export async function handleRolePlay(req: Request, res: Response): Promise<void> {
  try {
    // Validar request
    const validatedRequest = validateRolePlayRequest(req.body);

    // Llamar al servicio
    const response = await sendRolePlayMessage(validatedRequest);

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
