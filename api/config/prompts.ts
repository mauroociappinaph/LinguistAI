/**
 * System instructions y prompts centralizados
 * Facilita el mantenimiento y modificación de prompts
 */

/**
 * System instruction por defecto para chat
 */
export const DEFAULT_SYSTEM_INSTRUCTION =
  'You are a helpful English language learning assistant.';

/**
 * Crea system instruction para roleplay
 */
export function createRolePlayInstruction(
  aiPersona: string,
  scenarioContext: string
): string {
  return `You are acting as ${aiPersona} in a roleplay scenario.
Context: ${scenarioContext}.
Keep responses concise and natural for spoken conversation.
Do not break character.`;
}

/**
 * Crea prompt para análisis de pronunciación
 */
export function createPronunciationPrompt(
  transcript: string,
  context?: string
): string {
  return `Analyze this spoken response: "${transcript}". The context/prompt was: "${context || 'N/A'}".
Provide a JSON response with:
- "score" (number 1-10 overall)
- "feedback" (string, brief encouraging advice under 40 words)
- "breakdown" (object with keys "grammar", "clarity", "relevance", each a number 1-10).`;
}

/**
 * Crea prompt para corrección gramatical
 */
export function createGrammarPrompt(text: string): string {
  return `Analyze and correct the following text for grammar, spelling, and style: "${text}".
Provide a JSON response with:
- "correctedText" (string)
- "corrections" (array of objects with "original", "corrected", and "explanation")`;
}

/**
 * Crea prompt para búsqueda
 */
export function createSearchPrompt(query: string, context?: string): string {
  return `Search query: "${query}". Context: "${context || 'N/A'}". Provide relevant results.`;
}

/**
 * Crea prompt para análisis de imagen
 */
export function createVisionPrompt(prompt?: string): string {
  return prompt || 'Describe this image in detail.';
}
