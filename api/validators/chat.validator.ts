import { ChatRequestSchema, RolePlayRequestSchema, ChatRequest, RolePlayRequest } from './zod.schemas.js';
import { ValidationError } from './common.validator.js';

/**
 * Validadores para endpoints de chat usando Zod
 */

/**
 * Valida request de chat normal
 * @throws {ValidationError} Si la validación falla
 */
export function validateChatRequest(body: any): ChatRequest {
  const result = ChatRequestSchema.safeParse(body);

  if (!result.success) {
    // Format Zod errors into a readable string
    const errorMessage = result.error.issues.map((e: any) => `${e.path.join('.')}: ${e.message}`).join(', ');
    throw new ValidationError(errorMessage);
  }

  return result.data;
}

/**
 * Valida request de roleplay
 * @throws {ValidationError} Si la validación falla
 */
export function validateRolePlayRequest(body: any): RolePlayRequest {
  const result = RolePlayRequestSchema.safeParse(body);

  if (!result.success) {
    const errorMessage = result.error.issues.map((e: any) => `${e.path.join('.')}: ${e.message}`).join(', ');
    throw new ValidationError(errorMessage);
  }

  return result.data;
}
