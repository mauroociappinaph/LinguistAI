```typescript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './createUserSlice';
import { createUISlice, UISlice } from './createUISlice';
import { createVocabularySlice, VocabularySlice } from './createVocabularySlice';

// Combine types
export type StoreState = UserSlice & UISlice & VocabularySlice;

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createUISlice(...a),
      ...createVocabularySlice(...a),
    }),
    {
      name: 'linguist-storage',
      storage: createJSONStorage(() => localStorage),
      // No persistir vocabulary en localStorage (solo en memoria)
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        darkMode: state.darkMode,
        currentView: state.currentView,
        activeLessonId: state.activeLessonId,
        // Excluir vocabulary del persist
      }),
    }
  )
);
