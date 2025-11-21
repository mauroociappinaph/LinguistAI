import { sendChatMessage as sendChatToGemini } from './gemini';
import { logger } from '../utils/logger';

/**
 * AI Service - Capa de abstracción para servicios de IA
 *
 * IMPORTANTE: Todo pasa por el backend proxy ahora.
 * El fallback a Groq (si es necesario) debe manejarse en el backend,
 * no en el frontend, para mantener las API keys seguras.
 */

export async function sendChatMessage(
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<{ text: string }> {
  try {
    logger.info('AI Service: Sending chat message through backend proxy');
    const response = await sendChatToGemini(history, newMessage);
    logger.info('AI Service: Message sent successfully');
    return response;
  } catch (error) {
    logger.error('AI Service: Error sending message', error);
    throw error;
  }
}
