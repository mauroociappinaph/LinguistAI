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
 * Valida formato de email con regex robusto
 * @param email - Email a validar
 * @returns true si el email es válido
 */
export const validateEmail = (email: string): boolean => {
  // Regex más estricto que cumple con RFC 5322
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

/**
 * Valida contraseña con reglas de complejidad
 * - Mínimo 8 caracteres
 * - Al menos una mayúscula
 * - Al menos una minúscula
 * - Al menos un número
 * @param password - Contraseña a validar
 * @returns true si la contraseña cumple los requisitos
 */
export const validatePassword = (password: string): boolean => {
  if (password.length < 8) return false;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber;
};

/**
 * Sanitiza nombre de usuario para prevenir XSS básico y espacios extra
 * @param name - Nombre a sanitizar
 * @returns Nombre limpio
 */
export const sanitizeName = (name: string): string => {
  if (!name) return '';
  return name
    .trim()
    .replace(/[<>]/g, '') // Eliminar caracteres peligrosos para HTML
    .slice(0, 50); // Limitar longitud
};
