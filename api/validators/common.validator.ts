/**
 * Validadores comunes reutilizables
 * Eliminan la duplicación de código de validación
 */

/**
 * Error de validación personalizado
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Valida que un valor sea un string no vacío
 * @throws {ValidationError} Si la validación falla
 */
export function validateString(value: any, fieldName: string): string {
  if (!value || typeof value !== 'string') {
    throw new ValidationError(`${fieldName} is required and must be a string`);
  }
  return value;
}

/**
 * Valida que un valor sea un string opcional (puede ser undefined)
 * @throws {ValidationError} Si el valor existe pero no es string
 */
export function validateOptionalString(value: any, fieldName: string): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (typeof value !== 'string') {
    throw new ValidationError(`${fieldName} must be a string if provided`);
  }
  return value;
}

/**
 * Valida que un valor sea un string en formato base64
 * @throws {ValidationError} Si la validación falla
 */
export function validateBase64(value: any, fieldName: string): string {
  const str = validateString(value, fieldName);

  // Validación básica de formato base64
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  if (!base64Regex.test(str)) {
    throw new ValidationError(`${fieldName} must be a valid base64 string`);
  }

  return str;
}

/**
 * Valida que un valor sea un objeto
 * @throws {ValidationError} Si la validación falla
 */
export function validateObject(value: any, fieldName: string): object {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new ValidationError(`${fieldName} is required and must be an object`);
  }
  return value;
}

/**
 * Valida que un valor sea un array
 * @throws {ValidationError} Si la validación falla
 */
export function validateArray(value: any, fieldName: string): any[] {
  if (!Array.isArray(value)) {
    throw new ValidationError(`${fieldName} is required and must be an array`);
  }
  return value;
}

/**
 * Valida que un valor sea un array opcional
 */
export function validateOptionalArray(value: any, fieldName: string): any[] | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  return validateArray(value, fieldName);
}
