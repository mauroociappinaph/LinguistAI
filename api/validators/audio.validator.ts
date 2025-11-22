import { PronunciationRequest, TTSRequest } from '../types/requests.js';
import { validateString, validateOptionalString, ValidationError } from './common.validator.js';
import { TTSRequestSchema } from './zod.schemas.js';

/**
 * Validadores para endpoints de audio
 */

/**
 * Valida request de análisis de pronunciación
 * @throws {ValidationError} Si la validación falla
 */
export function validatePronunciationRequest(body: any): PronunciationRequest {
  return {
    transcript: validateString(body.transcript, 'transcript'),
    context: validateOptionalString(body.context, 'context'),
  };
}

/**
 * Valida request de generación de TTS
 * @throws {ValidationError} Si la validación falla
 */
export function validateTTSRequest(body: any): TTSRequest {
  const result = TTSRequestSchema.safeParse(body);

  if (!result.success) {
    const errorMessage = result.error.issues.map((e: any) => `${e.path.join('.')}: ${e.message}`).join(', ');
    throw new ValidationError(errorMessage);
  }

  return result.data;
}
