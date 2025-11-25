import { proxyFetch } from './core';

// 1. Fast AI Responses for Grammar Checking/Feedback (Gemini 2.5 Flash Lite)
export const checkGrammarFast = async (text: string): Promise<string> => {
  try {
    const response = await proxyFetch('/api/gemini/grammar', {
      text
    });

    return (response as any).correctedText || "Could not analyze.";
  } catch (error) {
    console.error("Grammar check failed", error);
    return "Error checking grammar.";
  }
};
