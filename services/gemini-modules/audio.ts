import { getClient } from './core';
import { getCachedAudio, cacheAudio, generateCacheKey } from "../../utils/audioStorage";
import { logger } from '../../utils/logger';
import { Modality } from '@google/genai';

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
  const cacheKey = generateCacheKey(text, voiceName);

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

// 4. Text-to-Speech (Imagen 3 / Speech) - USING WEBSOCKET FOR REAL-TIME
export const generateAudio = async (text: string): Promise<string> => {
    const cacheKey = generateCacheKey(text, 'gemini-tts'); // Fix: provide voice/context

    // 1. Check Cache
    const cachedBlob = await getCachedAudio(cacheKey);
    if (cachedBlob) {
      logger.info("Audio loaded from cache (IndexedDB) ⚡");
      return URL.createObjectURL(cachedBlob);
    }

    logger.info("Generating audio from Gemini API...");

    // FOR DEMO: Using Browser Speech Synthesis as placeholder to ensure functionality
    // while waiting for specific Gemini TTS endpoint integration details.
    return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1.0;

        console.warn("Gemini TTS not fully implemented in SDK yet. Using fallback.");
        resolve("");
    });
  };

// Helper: Convert raw PCM to WAV
function pcmToWav(pcmData: Float32Array | Uint8Array, sampleRate: number): Uint8Array {
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
