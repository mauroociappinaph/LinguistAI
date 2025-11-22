import { StateCreator } from 'zustand';
import { UserState, Difficulty } from '../types';
import {
  getCurrentUser,
  signOut as supabaseSignOut,
  getUserProfile,
} from '../services/supabase/auth';
import {
  markLessonComplete,
  getCompletedLessonIds,
} from '../services/supabase/progress';
import { supabase } from '../services/supabase/client';

export interface UserSlice {
  user: UserState | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  darkMode: boolean;
  // Auth methods
  loadUserProfile: () => Promise<void>;
  signOut: () => Promise<void>;
  initializeAuth: () => Promise<void>;
  // User actions
  toggleDarkMode: () => void;
  completeLesson: (id: string, xp: number) => Promise<void>;
}

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  darkMode: true,

  /**
   * Inicializa el listener de cambios de autenticación
   * Se llama una vez al inicio de la app
   */
  initializeAuth: async () => {
    try {
      // 1. Verificar sesión actual PRIMERO
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        // Hay sesión activa, cargar perfil
        try {
          const profile = await getUserProfile(session.user.id);
          const completedLessons = await getCompletedLessonIds();
          set({
            user: { ...profile, completedLessons },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error('Error loading user profile:', error);
          set({ user: null, isAuthenticated: false, isLoading: false });
        }
      } else {
        // No hay sesión, mostrar login
        set({ user: null, isAuthenticated: false, isLoading: false });
      }

      // 2. Configurar listener para cambios futuros
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          try {
            const profile = await getUserProfile(session.user.id);
            const completedLessons = await getCompletedLessonIds();
            set({
              user: { ...profile, completedLessons },
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (error) {
            console.error('Error loading user profile:', error);
            set({ user: null, isAuthenticated: false, isLoading: false });
          }
        } else if (event === 'SIGNED_OUT') {
          set({ user: null, isAuthenticated: false, isLoading: false });
        }
      });
    } catch (error) {
      console.error('Error initializing auth:', error);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  /**
   * Carga el perfil del usuario desde Supabase
   * Zustand sigue siendo la única fuente de verdad en el frontend
   */
  loadUserProfile: async () => {
    try {
      set({ isLoading: true });
      const userProfile = await getCurrentUser();

      if (userProfile) {
        // Cargar lecciones completadas
        const completedLessons = await getCompletedLessonIds();
        set({
          user: { ...userProfile, completedLessons },
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  /**
   * Cierra la sesión del usuario
   */
  signOut: async () => {
    try {
      await supabaseSignOut();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  },

  /**
   * Toggle dark mode (persiste en Zustand)
   */
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  /**
   * Marca una lección como completada
   * Actualiza Zustand Y sincroniza con Supabase
   */
  completeLesson: async (id: string, xp: number) => {
    const { user } = get();
    if (!user) return;

    try {
      // Sincronizar con Supabase primero
      await markLessonComplete(id, xp);

      // Actualizar estado local en Zustand
      set((state) => ({
        user: state.user
          ? {
              ...state.user,
              xp: state.user.xp + xp,
              completedLessons: state.user.completedLessons.includes(id)
                ? state.user.completedLessons
                : [...state.user.completedLessons, id],
            }
          : null,
      }));
    } catch (error) {
      console.error('Error completing lesson:', error);
      // Si falla Supabase, al menos actualizar localmente
      set((state) => ({
        user: state.user
          ? {
              ...state.user,
              xp: state.user.xp + xp,
              completedLessons: state.user.completedLessons.includes(id)
                ? state.user.completedLessons
                : [...state.user.completedLessons, id],
            }
          : null,
      }));
    }
  },
});
