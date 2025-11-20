import { GoogleGenAI } from "@google/genai";
import { getCachedAudio, cacheAudio, generateCacheKey } from "../utils/audioStorage";
import { SYSTEM_INSTRUCTION } from './prompts';
import { logger } from '../utils/logger';
import { Modality } from '@google/genai'; // Assuming Modality is imported from here

const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

// 1. Chat (Text) - Gemini 3 Pro Preview
export const sendChatMessage = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<{ text: string }> => {
  const ai = getClient();
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview', // Best for complex reasoning/chat
      history: history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: newMessage });
    return { text: response.text || "" };
  } catch (error) {
    console.error("Chat failed", error);
    // Lanzar el error para que aiService.ts pueda activar fallback
    throw error;
  }
};

// 2.5 Role Play Chat (Gemini 3 Pro Preview)
export const sendRolePlayMessage = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string,
  scenarioContext: string,
  aiPersona: string
): Promise<{ text: string }> => {
  const ai = getClient();
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      history: history,
      config: {
        systemInstruction: `You are acting as ${aiPersona} in a roleplay scenario.
        Context: ${scenarioContext}.
        Keep responses concise and natural for spoken conversation.
        Do not break character.`,
      }
    });

    const response = await chat.sendMessage({ message: newMessage });
    return { text: response.text || "" };
  } catch (error) {
    console.error("RolePlay Chat failed", error);
    throw error;
  }
};

// 3. Google Search Grounding (Gemini 2.5 Flash)
export const searchCulturalFact = async (query: string) => {
  const ai = getClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Explain this concept in the context of English speaking culture or history: "${query}". Be concise and educational.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    // Fix: Access grounding metadata correctly based on SDK type definition or use any if types are incomplete
    const candidates = response.candidates as any[];
    const chunks = candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = chunks?.map((c: any) => c.web).filter(Boolean) || [];

    return {
      text: response.text || "No information found.",
      sources: sources
    };
  } catch (error) {
    console.error("Search failed", error);
    return { text: "Search unavailable.", sources: [] };
  }
};

// 4. AI Image Editing (Gemini 2.5 Flash Image)
export const editImage = async (base64Image: string, prompt: string): Promise<string | null> => {
    const ai = getClient();
    try {
      const match = base64Image.match(/^data:(.+);base64,(.+)$/);
      if (!match) return null;

      const mimeType = match[1];
      const data = match[2];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: data,
              },
            },
            {
              text: prompt,
            },
          ],
        },
        config: {
          responseModalities: [Modality.IMAGE],
        }
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      if (part?.inlineData?.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }

      return null;
    } catch (error) {
      console.error("Image edit failed", error);
      return null;
    }
};

// 5. Pronunciation & Fluency Analysis (Gemini 2.5 Flash)
export interface PronunciationResult {
  score: number;
  feedback: string;
  breakdown: {
    grammar: number;
    clarity: number;
    relevance: number;
  }
}

export const analyzePronunciation = async (transcript: string, context: string): Promise<PronunciationResult> => {
    const ai = getClient();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Analyze this spoken response: "${transcript}". The context/prompt was: "${context}".
        Provide a JSON response with:
        - "score" (number 1-10 overall)
        - "feedback" (string, brief encouraging advice under 40 words)
        - "breakdown" (object with keys "grammar", "clarity", "relevance", each a number 1-10).`,
        config: {
          responseMimeType: 'application/json',
        }
      });

      const text = response.text;
      if (!text) throw new Error("No response text");

      return JSON.parse(text) as PronunciationResult;
    } catch (error) {
      console.error("Pronunciation analysis failed", error);
      return {
        score: 0,
        feedback: "Could not analyze speech details. Please try again.",
        breakdown: { grammar: 0, clarity: 0, relevance: 0 }
      };
    }
};


// 6. Text-to-Speech Generation (Gemini 2.5 Flash Preview TTS)
export const generateSpeech = async (text: string, voiceName: string = 'Kore'): Promise<string | null> => {
  const cacheKey = generateCacheKey(text, voiceName); // Fix: pass voiceName

  // 1. Check Cache (IndexedDB)
  const cachedBlob = await getCachedAudio(cacheKey);
  if (cachedBlob) {
    logger.info("Audio loaded from cache (IndexedDB) ⚡");
    return URL.createObjectURL(cachedBlob);
  }

  const ai = getClient();
  try {
    logger.info("Generating audio from Gemini API...");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
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
    if (!base64Audio) return null;

    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const wavBytes = pcmToWav(bytes, 24000);
    const blob = new Blob([wavBytes as any], { type: 'audio/wav' });

    await cacheAudio(cacheKey, blob);

    return URL.createObjectURL(blob);

  } catch (error) {
    console.error("TTS Generation failed", error);
    return null;
  }
};

// Helper to convert PCM to WAV (simplified for example)
function pcmToWav(pcmData: Float32Array | Uint8Array, sampleRate: number): ArrayBuffer {
    const buffer = new ArrayBuffer(44 + pcmData.length * 2);
    const view = new DataView(buffer);

    // RIFF chunk descriptor
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + pcmData.length * 2, true);
    writeString(view, 8, 'WAVE');

    // fmt sub-chunk
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);

    // data sub-chunk
    writeString(view, 36, 'data');
    view.setUint32(40, pcmData.length * 2, true);

    // Write PCM samples
    let offset = 44;
    for (let i = 0; i < pcmData.length; i++) {
        const s = Math.max(-1, Math.min(1, pcmData[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        offset += 2;
    }

    return buffer;
}

function writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}
