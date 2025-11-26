import { Request, Response, NextFunction } from 'express';
import { createClient } from '@supabase/supabase-js';

/**
 * Authentication Middleware
 * Verifica JWT tokens de Supabase en los requests
 */

// Inicializar cliente de Supabase con service role key para verificación server-side
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn(
    '⚠️  WARNING: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set. Authentication middleware will not work.'
  );
}

const supabaseAdmin = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

/**
 * Extiende el tipo Request de Express para incluir información del usuario
 */
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email?: string;
    role?: string;
  };
}

/**
 * Middleware que requiere autenticación válida
 * Extrae el token JWT del header Authorization y lo verifica
 */
export const requireAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Verificar que Supabase esté configurado
    if (!supabaseAdmin) {
      res.status(500).json({
        error: 'Server configuration error',
        message: 'Authentication service not properly configured'
      });
      return;
    }

    // Extraer token del header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Missing or invalid Authorization header. Expected format: "Bearer <token>"'
      });
      return;
    }

    const token = authHeader.substring(7); // Remover "Bearer "

    // Verificar el token con Supabase
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !user) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid or expired token',
        details: error?.message
      });
      return;
    }

    // Adjuntar información del usuario al request
    req.user = {
      id: user.id,
      email: user.email,
      role: user.user_metadata?.role || 'user'
    };

    // Continuar al siguiente middleware/handler
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred during authentication'
    });
  }
};

/**
 * Middleware opcional de autenticación
 * Si hay token, lo verifica y adjunta el usuario al request
 * Si no hay token, continúa sin error (útil para endpoints públicos con funcionalidad extra para usuarios autenticados)
 */
export const optionalAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!supabaseAdmin) {
      next();
      return;
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      next();
      return;
    }

    const token = authHeader.substring(7);
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

    if (!error && user) {
      req.user = {
        id: user.id,
        email: user.email,
        role: user.user_metadata?.role || 'user'
      };
    }

    next();
  } catch (error) {
    // En caso de error, simplemente continuar sin usuario autenticado
    next();
  }
};

/**
 * Middleware para verificar que el usuario sea administrador
 * Debe usarse DESPUÉS de requireAuth
 */
export const requireAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    res.status(401).json({
      error: 'Unauthorized',
      message: 'Authentication required'
    });
    return;
  }

  if (req.user.role !== 'admin') {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Admin access required'
    });
    return;
  }

  next();
};

