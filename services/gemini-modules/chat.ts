import { getClient } from './core';
import { SYSTEM_INSTRUCTION } from '../prompts';

// 1. Chat (Text) - Gemini 3 Pro Preview
export const sendChatMessage = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<{ text: string }> => {
  const ai = getClient();
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview', // Best for complex reasoning/chat
      history: history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: newMessage });
    return { text: response.text || "" };
  } catch (error) {
    console.error("Chat failed", error);
    // Lanzar el error para que aiService.ts pueda activar fallback
    throw error;
  }
};

// 2.5 Role Play Chat (Gemini 3 Pro Preview)
export const sendRolePlayMessage = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string,
  scenarioContext: string,
  aiPersona: string
): Promise<{ text: string }> => {
  const ai = getClient();
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      history: history,
      config: {
        systemInstruction: `You are acting as ${aiPersona} in a roleplay scenario.
        Context: ${scenarioContext}.
        Keep responses concise and natural for spoken conversation.
        Do not break character.`,
      }
    });

    const response = await chat.sendMessage({ message: newMessage });
    return { text: response.text || "" };
  } catch (error) {
    console.error("RolePlay Chat failed", error);
    throw error;
  }
};
