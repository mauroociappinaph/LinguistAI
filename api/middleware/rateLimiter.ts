import { rateLimit } from 'express-rate-limit';

/**
 * Rate limiter general para todos los endpoints
 * Límite: 100 requests por 15 minutos por IP
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 requests por ventana
  message: {
    error: 'Too many requests from this IP, please try again after 15 minutes.'
  },
  standardHeaders: true, // Retorna info de rate limit en headers `RateLimit-*`
  legacyHeaders: false, // Deshabilita headers `X-RateLimit-*`
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests',
      message: 'You have exceeded the maximum number of requests. Please try again later.',
      retryAfter: Math.ceil(req.rateLimit.resetTime! / 1000)
    });
  }
});

/**
 * Rate limiter específico para endpoints de TTS (más costosos)
 * Límite: 20 requests por 15 minutos por IP
 */
export const ttsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 20, // Límite más estricto para TTS
  message: {
    error: 'Too many TTS requests from this IP, please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many TTS requests',
      message: 'TTS generation is resource-intensive. Please try again later.',
      retryAfter: Math.ceil(req.rateLimit.resetTime! / 1000)
    });
  }
});
