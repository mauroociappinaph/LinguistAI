import { PronunciationRequest, TTSRequest } from '../types/requests.js';
import { validateString, validateOptionalString } from './common.validator.js';

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
  return {
    text: validateString(body.text, 'text'),
    voiceName: validateOptionalString(body.voiceName, 'voiceName'),
  };
}
