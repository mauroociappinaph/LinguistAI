import { proxyFetch } from './core';

// 3. Google Search Grounding (Gemini 2.5 Flash)
export const searchCulturalFact = async (query: string) => {
  try {
    const response = await proxyFetch('/api/gemini/search', {
      query,
      context: 'English speaking culture or history'
    });

    return {
      text: response.text || "No information found.",
      sources: response.sources || []
    };
  } catch (error) {
    console.error("Search failed", error);
    return { text: "Search unavailable.", sources: [] };
  }
};
