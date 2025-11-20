import { sendChatMessage as sendChatToGemini } from './gemini';
import { sendChatToGroq } from './groqClient';

type AIProvider = 'gemini' | 'groq';

function isRateLimitError(error: any): boolean {
  // Detectar error 429
  if (error?.status === 429) return true;
  if (error?.error?.code === 429) return true;

  // Detectar mensajes de quota
  const message = error?.message || error?.error?.message || '';
  return message.toLowerCase().includes('quota')
    || message.toLowerCase().includes('rate limit')
    || message.toLowerCase().includes('too many requests');
}

function logProviderUsage(provider: AIProvider, action: string) {
  const timestamp = new Date().toISOString();
  console.log(`[AI Service ${timestamp}] Using provider: ${provider} - ${action}`);
}

export async function sendChatMessage(
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<{ text: string }> {
  // Intentar con Gemini primero
  try {
    logProviderUsage('gemini', 'attempting');
    const response = await sendChatToGemini(history, newMessage);
    logProviderUsage('gemini', 'success');
    return response;
  } catch (error) {
    // Si es rate limit, hacer fallback a Groq
    if (isRateLimitError(error)) {
      console.warn('[AI Service] Gemini rate limit detected, falling back to Groq');
      logProviderUsage('groq', 'fallback activated');

      try {
        const response = await sendChatToGroq(history, newMessage);
        logProviderUsage('groq', 'success');
        return response;
      } catch (groqError) {
        console.error('[AI Service] Groq fallback also failed:', groqError);
        throw groqError;
      }
    }

    // Re-lanzar otros errores que no sean rate limit
    throw error;
  }
}
