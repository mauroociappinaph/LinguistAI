import { VisionRequest } from '../types/requests.js';
import { validateBase64, validateOptionalString } from './common.validator.js';

/**
 * Validadores para endpoints de visión
 */

/**
 * Valida request de análisis de imagen
 * @throws {ValidationError} Si la validación falla
 */
export function validateVisionRequest(body: any): VisionRequest {
  return {
    imageData: validateBase64(body.imageData, 'imageData'),
    prompt: validateOptionalString(body.prompt, 'prompt'),
  };
}
