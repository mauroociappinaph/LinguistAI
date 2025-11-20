import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './createUserSlice';
import { createUISlice, UISlice } from './createUISlice';

// Combine types
export type AppState = UserSlice & UISlice;

export const useStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createUISlice(...a),
    }),
    {
      name: 'linguistai-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        darkMode: state.darkMode,
        chatHistory: state.chatHistory,
      }),
    }
  )
);