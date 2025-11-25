import { StateCreator } from 'zustand';
import { Lesson } from '../types';

const MAX_CHAT_HISTORY = 100; // Límite de mensajes en historial

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface UISlice {
  lessons: Lesson[];
  chatHistory: ChatMessage[];
  addChatMessage: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  lessons: [],
  chatHistory: [],

  addChatMessage: (msg) => set((state) => {
    const newMessage: ChatMessage = {
      ...msg,
      id: crypto.randomUUID(), // Fix BUG-013: Usar UUID en lugar de Date.now()
      timestamp: Date.now()
    };

    // Mantener solo los últimos MAX_CHAT_HISTORY mensajes
    const updatedHistory = [...state.chatHistory, newMessage];
    if (updatedHistory.length > MAX_CHAT_HISTORY) {
      updatedHistory.shift(); // Eliminar el más antiguo
    }

    return { chatHistory: updatedHistory };
  }),
});
