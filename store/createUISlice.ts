import { StateCreator } from 'zustand';
import { View, Lesson, ChatMessage } from '../types';
import { ALL_LESSONS as LESSONS } from '../data';

export interface UISlice {
  currentView: View;
  activeLessonId: string | null;
  lessons: Lesson[];
  chatHistory: ChatMessage[];
  setView: (view: View) => void;
  startLesson: (id: string) => void;
  exitLesson: () => void;
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  currentView: View.DASHBOARD,
  activeLessonId: null,
  lessons: LESSONS,
  chatHistory: [
    { id: 'init', role: 'model', text: 'Hello! I am your AI English tutor. How can I help you today?', timestamp: Date.now() }
  ],
  setView: (view) => set({ currentView: view }),
  startLesson: (id) => {
    const lessonExists = LESSONS.some(l => l.id === id);
    if (!lessonExists) {
      console.error(`[UISlice] Attempted to start non-existent lesson: ${id}`);
      return;
    }
    set({ activeLessonId: id, currentView: View.LESSON });
  },
  exitLesson: () => set({ activeLessonId: null, currentView: View.DASHBOARD }),
  addChatMessage: (msg) => set((state) => ({
    chatHistory: [...state.chatHistory, { ...msg, id: Date.now().toString(), timestamp: Date.now() }]
  })),
});
