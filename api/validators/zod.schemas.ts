import { z } from 'zod';

/**
 * Esquemas de validación Zod para la API
 * Centraliza la definición de tipos y reglas de validación
 */

// ==========================================
// Common Schemas
// ==========================================

export const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  parts: z.array(z.object({ text: z.string() })),
});

export const HistorySchema = z.array(MessageSchema).optional().default([]);

// ==========================================
// Chat Schemas
// ==========================================

export const ChatRequestSchema = z.object({
  history: HistorySchema,
  newMessage: z.string().min(1, "New message is required"),
  systemInstruction: z.string().optional(),
});

export const RolePlayRequestSchema = z.object({
  history: HistorySchema,
  newMessage: z.string().min(1, "New message is required"),
  scenarioContext: z.string().min(1, "Scenario context is required"),
  aiPersona: z.string().min(1, "AI Persona is required"),
});

// ==========================================
// TTS Schemas
// ==========================================

export const TTSRequestSchema = z.object({
  text: z.string().min(1, "Text is required").max(5000, "Text too long (max 5000 chars)"),
  voice: z.string().optional(), // Could be enum if we have fixed voices
  speed: z.number().min(0.5).max(2.0).optional().default(1.0),
});

// ==========================================
// Vision Schemas
// ==========================================

export const VisionRequestSchema = z.object({
  image: z.string().refine((val) => {
    // Basic base64 validation or data URI validation
    return val.startsWith('data:image/') || /^[A-Za-z0-9+/]*={0,2}$/.test(val);
  }, "Invalid image format (must be base64 or data URI)"),
  prompt: z.string().min(1, "Prompt is required"),
});

// ==========================================
// Search Schemas
// ==========================================

export const SearchRequestSchema = z.object({
  query: z.string().min(1, "Query is required"),
});

// ==========================================
// Grammar Schemas
// ==========================================

export const GrammarRequestSchema = z.object({
  text: z.string().min(1, "Text is required"),
  context: z.string().optional(),
});

// Types inferred from schemas
export type ChatRequest = z.infer<typeof ChatRequestSchema>;
export type RolePlayRequest = z.infer<typeof RolePlayRequestSchema>;
export type TTSRequest = z.infer<typeof TTSRequestSchema>;
export type VisionRequest = z.infer<typeof VisionRequestSchema>;
export type SearchRequest = z.infer<typeof SearchRequestSchema>;
export type GrammarRequest = z.infer<typeof GrammarRequestSchema>;
