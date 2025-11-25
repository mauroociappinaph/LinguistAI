import { proxyFetch } from './core';
import { SYSTEM_INSTRUCTION } from '../prompts';

// 1. Chat (Text) - Gemini 3 Pro Preview
export const sendChatMessage = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<{ text: string }> => {
  try {
    const response = await proxyFetch('/api/gemini/chat', {
      history,
      newMessage,
      systemInstruction: SYSTEM_INSTRUCTION
    });

    return { text: (response as any).text || "" };
  } catch (error) {
    console.error("Chat failed", error);
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
  try {
    const response = await proxyFetch('/api/gemini/roleplay', {
      history,
      newMessage,
      scenarioContext,
      aiPersona
    });

    // Chat Service Fix
    const responseText = (response as any).text || "";
    return { text: responseText };
  } catch (error) {
    console.error("RolePlay Chat failed", error);
    throw error;
  }
};
