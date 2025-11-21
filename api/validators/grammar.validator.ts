import { GrammarRequest } from '../types/requests.js';
import { validateString } from './common.validator.js';

/**
 * Validadores para endpoints de gramática
 */

/**
 * Valida request de corrección gramatical
 * @throws {ValidationError} Si la validación falla
 */
export function validateGrammarRequest(body: any): GrammarRequest {
  return {
    text: validateString(body.text, 'text'),
  };
}
