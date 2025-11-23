import { StateCreator } from 'zustand';
import { Lesson, ChatMessage } from '../types';
import { ALL_LESSONS as LESSONS } from '../data';

export interface UISlice {
  lessons: Lesson[];
  chatHistory: ChatMessage[];
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  lessons: LESSONS,
  chatHistory: [
    { id: 'init', role: 'model', text: 'Hello! I am your AI English tutor. How can I help you today?', timestamp: Date.now() }
  ],
  addChatMessage: (msg) => set((state) => ({
    chatHistory: [...state.chatHistory, { ...msg, id: Date.now().toString(), timestamp: Date.now() }]
  })),
});
