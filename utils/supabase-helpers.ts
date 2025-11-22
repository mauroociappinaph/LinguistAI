import { PostgrestError, AuthError } from '@supabase/supabase-js';
import { UserState } from '../types';

/**
 * Helper utilities para Supabase
 * Siguiendo el principio DRY - código reutilizable para evitar repetición
 */

/**
 * Manejo centralizado de errores de Supabase
 * @param error - Error de Supabase (Postgrest o Auth)
 * @returns Error formateado con mensaje user-friendly
 */
export const handleSupabaseError = (error: PostgrestError | AuthError | Error): Error => {
  // Errores de autenticación
  if ('status' in error && error.status) {
    const authError = error as AuthError;
    switch (authError.status) {
      case 400:
        return new Error('Credenciales inválidas. Por favor, verifica tu email y contraseña.');
      case 422:
        return new Error('El email ya está registrado.');
      case 429:
        return new Error('Demasiados intentos. Por favor, intenta más tarde.');
      default:
        return new Error(authError.message || 'Error de autenticación');
    }
  }

  // Errores de base de datos
  if ('code' in error && error.code) {
    const dbError = error as PostgrestError;
    switch (dbError.code) {
      case '23505': // unique_violation
        return new Error('Este registro ya existe.');
      case '23503': // foreign_key_violation
        return new Error('Referencia inválida.');
      default:
        return new Error(dbError.message || 'Error de base de datos');
    }
  }

  // Error genérico
  return error instanceof Error ? error : new Error('Error desconocido');
};

/**
 * Valida formato de email
 * @param email - Email a validar
 * @returns true si el email es válido
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Transforma perfil de Supabase a formato UserState de Zustand
 * @param profile - Perfil desde la base de datos
 * @returns UserState para el store
 */
export const transformProfileToUser = (profile: any): UserState => {
  return {
    name: profile.name || 'User',
    currentLevel: profile.current_level || 'A1',
    xp: profile.xp || 0,
    streak: profile.streak || 0,
    badges: profile.badges || [],
    completedLessons: [], // Se carga desde lesson_progress
  };
};

/**
 * Formatea fecha en formato consistente
 * @param date - Fecha a formatear
 * @returns Fecha formateada como ISO string
 */
export const formatDate = (date: Date | string): string => {
  return new Date(date).toISOString();
};

/**
 * Valida contraseña (mínimo 6 caracteres)
 * @param password - Contraseña a validar
 * @returns true si la contraseña cumple los requisitos
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};
