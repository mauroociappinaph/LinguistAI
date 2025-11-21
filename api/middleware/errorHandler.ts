import { Request, Response, NextFunction } from 'express';

/**
 * Middleware centralizado para manejo de errores
 */
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log del error para debugging
  console.error('[ERROR]', {
    timestamp: new Date().toISOString(),
    path: req.path,
    method: req.method,
    error: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
  });

  // Determinar el código de estado HTTP apropiado
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // Respuesta al cliente
  res.status(statusCode).json({
    error: error.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
};

/**
 * Middleware para capturar errores async/await
 */
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
