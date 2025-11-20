import { getClient } from './core';

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
