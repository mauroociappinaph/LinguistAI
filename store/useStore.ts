import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './createUserSlice';
import { createUISlice, UISlice } from './createUISlice';
import { createVocabularySlice, VocabularySlice } from './createVocabularySlice';

// Combine types
export type StoreState = UserSlice & UISlice & VocabularySlice;

// Versión actual del store (incrementar cuando haya cambios breaking)
const STORE_VERSION = 1;

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createUISlice(...a),
      ...createVocabularySlice(...a),
    }),
    {
      name: 'linguist-storage',
      version: STORE_VERSION,
      storage: createJSONStorage(() => localStorage),

      // No persistir vocabulary en localStorage (solo en memoria)
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        darkMode: state.darkMode,
        // Excluir vocabulary, isLoading, authSubscription del persist
      }),

      // Migración para versiones futuras
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Ejemplo: Si en v0 teníamos 'theme' y ahora es 'darkMode'
          // persistedState.darkMode = persistedState.theme === 'dark';
          // delete persistedState.theme;
        }
        return persistedState as StoreState;
      },

      // Manejo de errores en rehidratación
      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.error('Error rehydrating store:', error);
            // Limpiar storage corrupto
            localStorage.removeItem('linguist-storage');
          } else {
            console.log('Store rehydrated successfully');
          }
        };
      },
    }
  )
);
