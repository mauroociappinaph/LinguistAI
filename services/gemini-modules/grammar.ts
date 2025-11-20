import { getClient } from './core';

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
