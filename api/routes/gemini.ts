import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import { getGeminiClient } from '../clients.js';
import { Modality } from '@google/genai';

const router: Router = Router();

/**
 * POST /api/gemini/chat
 * Endpoint para chat normal con Gemini
 */
router.post('/chat', asyncHandler(async (req: Request, res: Response) => {
  const { history, newMessage, systemInstruction } = req.body;

  // Validación de inputs
  if (!newMessage || typeof newMessage !== 'string') {
    res.status(400).json({ error: 'newMessage is required and must be a string' });
    return;
  }

  const ai = getGeminiClient();

  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    history: history || [],
    config: {
      systemInstruction: systemInstruction || 'You are a helpful English language learning assistant.',
    }
  });

  const response = await chat.sendMessage({ message: newMessage });

  res.json({ text: response.text || '' });
}));

/**
 * POST /api/gemini/roleplay
 * Endpoint para chat de roleplay con Gemini
 */
router.post('/roleplay', asyncHandler(async (req: Request, res: Response) => {
  const { history, newMessage, scenarioContext, aiPersona } = req.body;

  // Validación de inputs
  if (!newMessage || typeof newMessage !== 'string') {
    res.status(400).json({ error: 'newMessage is required and must be a string' });
    return;
  }
  if (!scenarioContext || !aiPersona) {
    res.status(400).json({ error: 'scenarioContext and aiPersona are required' });
    return;
  }

  const ai = getGeminiClient();

  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    history: history || [],
    config: {
      systemInstruction: `You are acting as ${aiPersona} in a roleplay scenario.
      Context: ${scenarioContext}.
      Keep responses concise and natural for spoken conversation.
      Do not break character.`,
    }
  });

  const response = await chat.sendMessage({ message: newMessage });

  res.json({ text: response.text || '' });
}));

/**
 * POST /api/gemini/pronunciation
 * Endpoint para análisis de pronunciación
 */
router.post('/pronunciation', asyncHandler(async (req: Request, res: Response) => {
  const { transcript, context } = req.body;

  // Validación de inputs
  if (!transcript || typeof transcript !== 'string') {
    res.status(400).json({ error: 'transcript is required and must be a string' });
    return;
  }

  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Analyze this spoken response: "${transcript}". The context/prompt was: "${context || 'N/A'}".
    Provide a JSON response with:
    - "score" (number 1-10 overall)
    - "feedback" (string, brief encouraging advice under 40 words)
    - "breakdown" (object with keys "grammar", "clarity", "relevance", each a number 1-10).`,
    config: {
      responseMimeType: 'application/json',
    }
  });

  const text = response.text;
  if (!text) {
    res.status(500).json({ error: 'No response from Gemini' });
    return;
  }

  const result = JSON.parse(text);
  res.json(result);
}));

/**
 * POST /api/gemini/tts
 * Endpoint para generación de texto a voz (Text-to-Speech)
 */
router.post('/tts', asyncHandler(async (req: Request, res: Response) => {
  const { text, voiceName = 'Kore' } = req.body;

  // Validación de inputs
  if (!text || typeof text !== 'string') {
    res.status(400).json({ error: 'text is required and must be a string' });
    return;
  }

  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-preview-tts',
    contents: [{ parts: [{ text: text }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: voiceName },
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

  if (!base64Audio) {
    res.status(500).json({ error: 'No audio generated' });
    return;
  }

  // Retornar el audio en base64 - el cliente lo procesará
  res.json({ audio: base64Audio });
}));

/**
 * POST /api/gemini/vision
 * Endpoint para análisis de imágenes
 */
router.post('/vision', asyncHandler(async (req: Request, res: Response) => {
  const { imageData, prompt } = req.body;

  // Validación de inputs
  if (!imageData || typeof imageData !== 'string') {
    res.status(400).json({ error: 'imageData is required and must be a base64 string' });
    return;
  }

  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
      {
        parts: [
          { text: prompt || 'Describe this image in detail.' },
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: imageData
            }
          }
        ]
      }
    ]
  });

  res.json({ text: response.text || '' });
}));

/**
 * POST /api/gemini/search
 * Endpoint para búsquedas semánticas
 */
router.post('/search', asyncHandler(async (req: Request, res: Response) => {
  const { query, context } = req.body;

  // Validación de inputs
  if (!query || typeof query !== 'string') {
    res.status(400).json({ error: 'query is required and must be a string' });
    return;
  }

  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Search query: "${query}". Context: "${context || 'N/A'}". Provide relevant results.`,
  });

  res.json({ text: response.text || '' });
}));

/**
 * POST /api/gemini/grammar
 * Endpoint para corrección gramatical
 */
router.post('/grammar', asyncHandler(async (req: Request, res: Response) => {
  const { text } = req.body;

  // Validación de inputs
  if (!text || typeof text !== 'string') {
    res.status(400).json({ error: 'text is required and must be a string' });
    return;
  }

  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Analyze and correct the following text for grammar, spelling, and style: "${text}".
    Provide a JSON response with:
    - "correctedText" (string)
    - "corrections" (array of objects with "original", "corrected", and "explanation")`,
    config: {
      responseMimeType: 'application/json',
    }
  });

  const result = JSON.parse(response.text || '{}');
  res.json(result);
}));

export default router;
