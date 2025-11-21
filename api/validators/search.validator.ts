import { SearchRequest } from '../types/requests.js';
import { validateString, validateOptionalString } from './common.validator.js';

/**
 * Validadores para endpoints de búsqueda
 */

/**
 * Valida request de búsqueda semántica
 * @throws {ValidationError} Si la validación falla
 */
export function validateSearchRequest(body: any): SearchRequest {
  return {
    query: validateString(body.query, 'query'),
    context: validateOptionalString(body.context, 'context'),
  };
}
