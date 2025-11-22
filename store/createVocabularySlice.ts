import { StateCreator } from 'zustand';
import {
  getUserVocabulary,
  addVocabularyItem as addVocabularyToSupabase,
  deleteVocabularyItem as deleteVocabularyFromSupabase,
  updateMasteryLevel as updateMasteryInSupabase
} from '../services/supabase/vocabulary';

/**
 * Vocabulary Slice
 * Responsabilidad: Gestionar vocabulario personalizado del usuario
 * Cache en Zustand para acceso rápido
 */

export interface VocabularyWord {
  id: string;
  word: string;
  translation: string | null;
  lesson_id: string | null;
  mastery_level: number;
  last_reviewed: string | null;
  created_at: string;
}

export interface VocabularySlice {
  vocabulary: VocabularyWord[];
  isVocabularyLoaded: boolean;
  loadVocabulary: () => Promise<void>;
  addVocabularyWord: (word: string, translation: string, lessonId?: string) => Promise<void>;
  deleteVocabularyWord: (id: string) => Promise<void>;
  updateWordMastery: (id: string, level: number) => Promise<void>;
  clearVocabulary: () => void;
}

export const createVocabularySlice: StateCreator<VocabularySlice> = (set, get) => ({
  vocabulary: [],
  isVocabularyLoaded: false,

  /**
   * Carga el vocabulario desde Supabase
   * Se llama una vez al login o al primer acceso
   */
  loadVocabulary: async () => {
    try {
      const data = await getUserVocabulary() as VocabularyWord[];
      set({ vocabulary: data, isVocabularyLoaded: true });
    } catch (error) {
      console.error('Error loading vocabulary:', error);
      set({ isVocabularyLoaded: true }); // Marcar como loaded aunque falle
    }
  },

  /**
   * Agrega una palabra nueva
   * Actualiza Zustand Y Supabase
   */
  addVocabularyWord: async (word: string, translation: string, lessonId?: string) => {
    try {
      const newWord = await addVocabularyToSupabase(word, translation, lessonId);

      // Actualizar cache local
      set((state) => ({
        vocabulary: [...state.vocabulary, newWord as VocabularyWord]
      }));
    } catch (error) {
      console.error('Error adding vocabulary:', error);
      throw error;
    }
  },

  /**
   * Elimina una palabra
   */
  deleteVocabularyWord: async (id: string) => {
    try {
      await deleteVocabularyFromSupabase(id);

      // Actualizar cache local
      set((state) => ({
        vocabulary: state.vocabulary.filter(v => v.id !== id)
      }));
    } catch (error) {
      console.error('Error deleting vocabulary:', error);
      throw error;
    }
  },

  /**
   * Actualiza el nivel de dominio de una palabra
   */
  updateWordMastery: async (id: string, level: number) => {
    try {
      await updateMasteryInSupabase(id, level);

      // Actualizar cache local
      set((state) => ({
        vocabulary: state.vocabulary.map(v =>
          v.id === id ? { ...v, mastery_level: level } : v
        )
      }));
    } catch (error) {
      console.error('Error updating mastery:', error);
      throw error;
    }
  },

  /**
   * Limpia el vocabulario (al hacer logout)
   */
  clearVocabulary: () => {
    set({ vocabulary: [], isVocabularyLoaded: false });
  },
});
