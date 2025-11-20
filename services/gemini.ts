
import { GoogleGenAI, Modality } from "@google/genai";
import { getCachedAudio, cacheAudio, generateCacheKey } from "../utils/audioStorage";
import { SYSTEM_INSTRUCTION } from './prompts';

const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

// 1. Fast AI Responses for Grammar Checking/Feedback (Gemini 2.5 Flash Lite)
export const checkGrammarFast = async (text: string): Promise<string> => {
  const ai = getClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest', // Mapping for flash lite
      contents: `Check the grammar of this sentence strictly and briefly. If correct, say "Correct". If incorrect, provide the fixed sentence only. Sentence: "${text}"`,
    });
    return response.text || "Could not analyze.";
  } catch (error) {
    console.error("Grammar check failed", error);
    return "Error checking grammar.";
  }
};

// 2. AI Powered Chatbot (Gemini 3 Pro Preview)
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
        systemInstruction: "You are an expert English tutor. Correct the user gently if they make mistakes, but keep the conversation flowing naturally. Adjust your vocabulary to the user's level.",
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
        systemInstruction: `You are participating in an English learning role-play.

        YOUR CHARACTER: ${aiPersona}
        SCENARIO: ${scenarioContext}

        INSTRUCTIONS:
        1. Stay 100% in character. Do NOT act as an AI assistant. Do NOT break the fourth wall.
        2. Keep responses concise (1-3 sentences) and conversational.
        3. Use English appropriate for an A1-A2 learner (simple, clear).
        4. React naturally to what the user says.
        5. If the user makes a mistake, reply naturally as a human would (perhaps asking for clarification), do not give grammar lessons.
        `,
      }
    });

    const response = await chat.sendMessage({ message: newMessage });
    return { text: response.text || "" };
  } catch (error) {
    console.error("Role play failed", error);
    return { text: "..." };
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
        tools: [{ googleSearch: {} }], // Search Grounding
      },
    });

    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
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
    // Fallback object
    return {
      score: 0,
      feedback: "Could not analyze speech details. Please try again.",
      breakdown: { grammar: 0, clarity: 0, relevance: 0 }
    };
  }
};

// 6. Text-to-Speech Generation (Gemini 2.5 Flash Preview TTS)
export const generateSpeech = async (text: string, voiceName: string = 'Kore'): Promise<string | null> => {
  const cacheKey = generateCacheKey(text, voiceName);

  // 1. Check Cache (IndexedDB) - Optimization Strategy
  const cachedBlob = await getCachedAudio(cacheKey);
  if (cachedBlob) {
    console.log("Audio loaded from cache (IndexedDB) ⚡");
    return URL.createObjectURL(cachedBlob);
  }

  // 2. API Generation
  const ai = getClient();
  try {
    console.log("Generating audio from Gemini API...");
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

    // Decode Base64 to PCM
    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Convert PCM to WAV
    const wavBytes = pcmToWav(bytes, 24000);
    const blob = new Blob([wavBytes], { type: 'audio/wav' });

    // 3. Store in Cache
    await cacheAudio(cacheKey, blob);

    return URL.createObjectURL(blob);

  } catch (error) {
    console.error("TTS Generation failed", error);
    return null;
  }
};

// Helper: Convert raw PCM to WAV
function pcmToWav(pcmData: Uint8Array, sampleRate: number): Uint8Array {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const wavHeader = new ArrayBuffer(44);
  const view = new DataView(wavHeader);

  // RIFF chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + pcmData.length, true);
  writeString(view, 8, 'WAVE');

  // fmt sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);

  // data sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, pcmData.length, true);

  // Concatenate header and data
  const wavBuffer = new Uint8Array(wavHeader.byteLength + pcmData.length);
  wavBuffer.set(new Uint8Array(wavHeader), 0);
  wavBuffer.set(pcmData, wavHeader.byteLength);

  return wavBuffer;
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
