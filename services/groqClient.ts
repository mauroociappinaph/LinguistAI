import Groq from 'groq-sdk';
import { SYSTEM_INSTRUCTION } from './prompts';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Solo para desarrollo
});

export async function sendChatToGroq(
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<{ text: string }> {
  try {
    // Convertir formato Gemini → Groq
    const groqMessages = [
      { role: 'system' as const, content: SYSTEM_INSTRUCTION },
      ...history.map(msg => ({
        role: (msg.role === 'model' ? 'assistant' : msg.role) as 'user' | 'assistant' | 'system',
        content: msg.parts[0].text
      }))
    ];

    // Agregar nuevo mensaje
    groqMessages.push({
      role: 'user',
      content: newMessage
    });

    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: groqMessages,
      temperature: 0.7,
      max_tokens: 1024
    });

    return {
      text: response.choices[0]?.message?.content || ''
    };
  } catch (error) {
    console.error('[Groq Client] Error:', error);
    throw error;
  }
}
