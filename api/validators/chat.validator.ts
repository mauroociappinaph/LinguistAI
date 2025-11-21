import { ChatRequest, RolePlayRequest } from '../types/requests.js';
import { validateString, validateOptionalString, validateOptionalArray } from './common.validator.js';

/**
 * Validadores para endpoints de chat
 */

/**
 * Valida request de chat normal
 * @throws {ValidationError} Si la validación falla
 */
export function validateChatRequest(body: any): ChatRequest {
  return {
    history: validateOptionalArray(body.history, 'history') || [],
    newMessage: validateString(body.newMessage, 'newMessage'),
    systemInstruction: validateOptionalString(body.systemInstruction, 'systemInstruction'),
  };
}

/**
 * Valida request de roleplay
 * @throws {ValidationError} Si la validación falla
 */
export function validateRolePlayRequest(body: any): RolePlayRequest {
  return {
    history: validateOptionalArray(body.history, 'history') || [],
    newMessage: validateString(body.newMessage, 'newMessage'),
    scenarioContext: validateString(body.scenarioContext, 'scenarioContext'),
    aiPersona: validateString(body.aiPersona, 'aiPersona'),
  };
}
