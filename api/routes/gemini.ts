import { Router } from 'express';
import { asyncHandler, requireAuth } from '../middleware/index.js';
import {
  handleChat,
  handleRolePlay,
  handlePronunciation,
  handleTTS,
  handleVision,
  handleSearch,
  handleGrammar
} from '../controllers/index.js';

/**
 * Rutas para endpoints de Gemini
 * Todos los endpoints requieren autenticación JWT
 */

const router: Router = Router();

// Aplicar autenticación a todas las rutas
router.use(requireAuth);

/**
 * POST /api/gemini/chat
 * Endpoint para chat normal con Gemini
 */
router.post('/chat', asyncHandler(handleChat));

/**
 * POST /api/gemini/roleplay
 * Endpoint para chat de roleplay con Gemini
 */
router.post('/roleplay', asyncHandler(handleRolePlay));

/**
 * POST /api/gemini/pronunciation
 * Endpoint para análisis de pronunciación
 */
router.post('/pronunciation', asyncHandler(handlePronunciation));

/**
 * POST /api/gemini/tts
 * Endpoint para generación de texto a voz (Text-to-Speech)
 */
router.post('/tts', asyncHandler(handleTTS));

/**
 * POST /api/gemini/vision
 * Endpoint para análisis de imágenes
 */
router.post('/vision', asyncHandler(handleVision));

/**
 * POST /api/gemini/search
 * Endpoint para búsquedas semánticas
 */
router.post('/search', asyncHandler(handleSearch));

/**
 * POST /api/gemini/grammar
 * Endpoint para corrección gramatical
 */
router.post('/grammar', asyncHandler(handleGrammar));

export default router;

