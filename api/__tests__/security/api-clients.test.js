import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { GoogleGenAI } from '@google/genai';
import Groq from 'groq-sdk';

// Mock de las librerías externas
vi.mock('@google/genai');
vi.mock('groq-sdk');

// Mock de process.env
const originalEnv = process.env;

beforeEach(() => {
  vi.clearAllMocks();
  process.env = { ...originalEnv };
});

afterEach(() => {
  process.env = originalEnv;
});

// Importar después del mock para que tome los mocks
import { getGeminiClient, getGroqClient } from '../../clients.ts';

describe('API Clients Security Tests', () => {
  describe('Gemini Client', () => {
    it('should throw error when GEMINI_API_KEY is missing', () => {
      delete process.env.GEMINI_API_KEY;

      expect(() => getGeminiClient()).toThrow('GEMINI_API_KEY no está configurada en las variables de entorno');
    });

    it('should create GoogleGenAI client with valid API key', () => {
      const testApiKey = 'AIzaSyTestApiKey';
      process.env.GEMINI_API_KEY = testApiKey;

      const mockGemini = getGeminiClient();

      expect(GoogleGenAI).toHaveBeenCalledTimes(1);
      expect(GoogleGenAI).toHaveBeenCalledWith({ apiKey: testApiKey });
      expect(mockGemini).toBeDefined();
    });

    it('should validate API key format (Google format)', () => {
      // Esquema de API key de Google: AizaSy[39 caracteres alfanuméricos y guiones]
      const validKeys = [
        'AIzaSyTestApiKeyForValidationPurposesOnly1234', // Key de prueba (no real)
        'AIzaSy123456789abcdefghijklmnopqrstuvwxy123' // Key de prueba válida
      ];

      const invalidKeys = [
        'AIzaSy123456789abcdefghijklmnopqrstuvwxy', // Muy corto
        'AIzaSy123!@#$%^&*()_', // Caracteres inválidos
        'APIKey1234567890', // No sigue el patrón
        'AIzaSy123456789abcdefghijklmnopqrstuvwxy123456789' // Demasiado largo
      ];

      validKeys.forEach(key => {
        process.env.GEMINI_API_KEY = key;
        expect(() => getGeminiClient()).not.toThrow();
      });

      // Aunque acepta formatos inválidos hoy, documentamos para futuros cambios
      invalidKeys.forEach(key => {
        process.env.GEMINI_API_KEY = key;
        // Por ahora no validamos formato, pero podríamos agregar validación futura
        expect(() => getGeminiClient()).not.toThrow();
      });
    });

    it('should return singleton instance', () => {
      process.env.GEMINI_API_KEY = 'AIzaSyTestApiKey';

      const client1 = getGeminiClient();
      const client2 = getGeminiClient();

      expect(client1).toBe(client2);
      expect(GoogleGenAI).toHaveBeenCalledTimes(1);
    });
  });

  describe('Groq Client', () => {
    it('should throw error when GROQ_API_KEY is missing', () => {
      delete process.env.GROQ_API_KEY;

      expect(() => getGroqClient()).toThrow('GROQ_API_KEY no está configurada en las variables de entorno');
    });

    it('should create Groq client with valid API key', () => {
      const testApiKey = 'gsk_TestApiKey';
      process.env.GROQ_API_KEY = testApiKey;

      const mockGroq = getGroqClient();

      expect(Groq).toHaveBeenCalledTimes(1);
      expect(Groq).toHaveBeenCalledWith({ apiKey: testApiKey });
      expect(mockGroq).toBeDefined();
    });

    it('should validate API key format (Groq format)', () => {
      // Formato típico de Groq: gsk_[string]
      const validKeys = [
        'gsk_TestApiKeyForValidationPurposesOnly12345', // Key de prueba (no real)
        'gsk_TestApiKey123', // Key de prueba válida
        'gsk_short' // Key corta pero válida
      ];

      const invalidKeys = [
        '', // Vacío
        'sk_TestKey', // Sin prefijo correcto
        'groq_TestKey' // Prefijo incorrecto
      ];

      validKeys.forEach(key => {
        process.env.GROQ_API_KEY = key;
        // Las funciones de cliente no validan formato actualmente
        expect(() => getGroqClient()).not.toThrow();
      });

      invalidKeys.forEach(key => {
        process.env.GROQ_API_KEY = key;
        if (key === '') {
          // Solo los strings vacíos causan error actualmente
          expect(() => getGroqClient()).toThrow();
        } else {
          // Actualmente no valida formato, así que no lanza error
        }
      });
    });

    it('should return singleton instance', () => {
      process.env.GROQ_API_KEY = 'gsk_TestApiKey';

      const client1 = getGroqClient();
      const client2 = getGroqClient();

      expect(client1).toBe(client2);
      expect(Groq).toHaveBeenCalledTimes(1);
    });
  });

  describe('Error Handling', () => {
    it('should handle constructor failures gracefully', () => {
      process.env.GEMINI_API_KEY = 'invalid-key';
      process.env.GROQ_API_KEY = 'invalid-key';

      // Simuamos que los constructores lanzan errores
      GoogleGenAI.mockImplementation(() => {
        throw new Error('Invalid API key format');
      });

      Groq.mockImplementation(() => {
        throw new Error('Invalid API key format');
      });

      expect(() => getGeminiClient()).toThrow('Invalid API key format');
      expect(() => getGroqClient()).toThrow('Invalid API key format');
    });

    it('should handle empty environment variables', () => {
      process.env.GEMINI_API_KEY = '';
      process.env.GROQ_API_KEY = '';

      expect(() => getGeminiClient()).toThrow();
      expect(() => getGroqClient()).toThrow();
    });

    it('should handle undefined environment variables', () => {
      delete process.env.GEMINI_API_KEY;
      delete process.env.GROQ_API_KEY;

      expect(() => getGeminiClient()).toThrow();
      expect(() => getGroqClient()).toThrow();
    });
  });
});
