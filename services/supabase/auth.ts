import { supabase } from './client';
import {
  handleSupabaseError,
  validateEmail,
  validatePassword,
  transformProfileToUser,
  sanitizeName
} from '../../utils/supabase-helpers';
import { UserState } from '../../types';

/**
 * Authentication Service
 * Responsabilidad única: Manejo de autenticación y sesiones
 * Sigue el principio SRP
 */

/**
 * Registra un nuevo usuario con email y contraseña
 * @param email - Email del usuario
 * @param password - Contraseña
 * @param name - Nombre completo
 * @returns Datos del usuario registrado
 */
export const signUpWithEmail = async (email: string, password: string, name: string) => {
  try {
    if (!validateEmail(email)) {
      throw new Error('Email inválido');
    }

    if (!validatePassword(password)) {
      throw new Error('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
    }

    const cleanName = sanitizeName(name);
    if (cleanName.length === 0) {
      throw new Error('El nombre es requerido');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: cleanName,
        },
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    throw handleSupabaseError(error as any);
  }
};

/**
 * Inicia sesión con email y contraseña
 * @param email - Email del usuario
 * @param password - Contraseña
 * @returns Datos de sesión
 */
export const signInWithEmail = async (email: string, password: string) => {
  try {
    if (!validateEmail(email)) {
      throw new Error('Email inválido');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw handleSupabaseError(error);
    return data;
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Cierra la sesión del usuario actual
 */
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw handleSupabaseError(error);
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Obtiene el usuario actual autenticado
 * @returns Usuario actual con su perfil
 */
export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw handleSupabaseError(error);
    if (!user) return null;

    // Obtener perfil completo de la base de datos
    const profile = await getUserProfile(user.id);
    return profile;
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Obtiene el rol del usuario actual
 * @returns Rol del usuario ('user' | 'admin')
 */
export const getUserRole = async (): Promise<'user' | 'admin'> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return 'user';

    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (error) throw handleSupabaseError(error);
    return data?.role || 'user';
  } catch (error) {
    return 'user';
  }
};

/**
 * Verifica si el usuario actual es administrador
 * @returns true si el usuario es admin
 */
export const isAdmin = async (): Promise<boolean> => {
  const role = await getUserRole();
  return role === 'admin';
};

/**
 * Escucha cambios en el estado de autenticación
 * @param callback - Función a ejecutar cuando cambia el estado
 */
export const onAuthStateChange = (
  callback: (user: UserState | null) => void
) => {
  return supabase.auth.onAuthStateChange(async (_event, session) => {
    if (session?.user) {
      const profile = await getUserProfile(session.user.id);
      callback(profile);
    } else {
      callback(null);
    }
  });
};

// ============================================
// HELPERS PRIVADOS (no exportados)
// ============================================

/**
 * Obtiene el perfil completo del usuario
 * @param userId - ID del usuario
 * @returns Perfil completo del usuario
 */
export const getUserProfile = async (userId: string): Promise<UserState> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw handleSupabaseError(error);
  return transformProfileToUser(data);
};
