import { StateCreator } from 'zustand';
import { UserState } from '../types';
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

// Flags para prevenir inicialización múltiple (Module-level singleton)
let isInitializing = false;
let isInitialized = false;

export interface UserSlice {
  user: UserState | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  darkMode: boolean;
  authSubscription: { unsubscribe: () => void } | null;
  // Auth methods
  loadUserProfile: () => Promise<void>;
  signOut: () => Promise<void>;
  initializeAuth: () => Promise<() => void>;
  // User actions
  toggleDarkMode: () => void;
  completeLesson: (id: string, xp: number) => Promise<void>;
}

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  darkMode: true,
  authSubscription: null,

  /**
   * Inicializa el listener de cambios de autenticación
   * Se llama una vez al inicio de la app
   */
  initializeAuth: async () => {
    if (isInitializing || isInitialized) {
      console.warn('[initializeAuth] Already initialized or initializing');
      return () => {};
    }

    isInitializing = true;
    console.log('[initializeAuth] Starting...');

    // Limpiar listener previo si existe (defensive programming)
    const currentSubscription = get().authSubscription;
    if (currentSubscription) {
      console.log('[initializeAuth] Cleaning up previous listener');
      currentSubscription.unsubscribe();
      set({ authSubscription: null });
    }

    try {
      // 1. Verificar sesión actual PRIMERO
      console.log('[initializeAuth] Checking session...');
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error('[initializeAuth] Session error:', sessionError);
        set({ user: null, isAuthenticated: false, isLoading: false });
        isInitialized = true;
        isInitializing = false;
        return () => {};
      }

      console.log('[initializeAuth] Session:', session ? 'Found' : 'Not found');

      if (session?.user) {
        console.log('[initializeAuth] User found, loading profile...');
        // Hay sesión activa, cargar perfil
        try {
          const profile = await getUserProfile(session.user.id);
          console.log('[initializeAuth] Profile loaded');

          const completedLessons = await getCompletedLessonIds();
          console.log('[initializeAuth] Completed lessons loaded:', completedLessons.length);

          set({
            user: { ...profile, completedLessons },
            isAuthenticated: true,
            isLoading: false,
          });

          // Cargar vocabulario en background (sin bloquear UI)
          // Fix BUG-002: Type safety check
          const state = get() as unknown as { loadVocabulary?: () => Promise<void> };
          if (state.loadVocabulary && typeof state.loadVocabulary === 'function') {
            console.log('[initializeAuth] Loading vocabulary in background...');
            state.loadVocabulary().catch((err: Error) =>
              console.error('Error loading vocabulary in background:', err)
            );
          }
        } catch (error) {
          console.error('[initializeAuth] Error loading user profile:', error);
          set({ user: null, isAuthenticated: false, isLoading: false });
        }
      } else {
        // No hay sesión, mostrar login
        console.log('[initializeAuth] No session, showing login');
        set({ user: null, isAuthenticated: false, isLoading: false });
      }

      // 2. Configurar listener para cambios futuros CON CLEANUP
      console.log('[initializeAuth] Setting up auth state listener...');
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('[onAuthStateChange] Event:', event);
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

      set({ authSubscription: subscription });
      isInitialized = true;
      console.log('[initializeAuth] Completed successfully');

      // Retornar función de cleanup
      return () => {
        console.log('[initializeAuth] Cleanup called');
        subscription.unsubscribe();
        set({ authSubscription: null });
        isInitialized = false;
      };

    } catch (error) {
      console.error('[initializeAuth] Unexpected error:', error);
      set({ user: null, isAuthenticated: false, isLoading: false });
      isInitialized = true; // Mark as initialized to prevent infinite retry loops if it's a hard error
      isInitializing = false;
      return () => {};
    } finally {
      isInitializing = false;
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

      // Limpiar vocabulario del cache
      const state = get() as unknown as { clearVocabulary?: () => void };
      if (state.clearVocabulary && typeof state.clearVocabulary === 'function') {
        state.clearVocabulary();
      }
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
    const { user, isAuthenticated } = get();

    // Fix BUG-006: Validaciones robustas
    if (!isAuthenticated || !user) {
      console.error('User must be authenticated to complete lessons');
      return;
    }

    if (!id || typeof id !== 'string') {
      console.error('Invalid lesson ID');
      return;
    }

    if (typeof xp !== 'number' || xp < 0) {
      console.error('XP must be a positive number');
      return;
    }

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
      // Si falla Supabase, al menos actualizar localmente (Optimistic UI fallback)
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
