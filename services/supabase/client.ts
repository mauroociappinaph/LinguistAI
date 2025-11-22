import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Client - Singleton instance
 * Utiliza las variables de entorno configuradas por el usuario
 */

const supabaseUrl = import.meta.env.VITE_SUPER_BASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPER_BASE_PUBLIC_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please ensure SUPER_BASE_URL and SUPER_BASE_PUBLIC_KEY are set in .env'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
