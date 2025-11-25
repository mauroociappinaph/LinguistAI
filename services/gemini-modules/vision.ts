import { proxyFetch } from './core';

// 4. AI Image Editing (Gemini 2.5 Flash Image)
export const editImage = async (base64Image: string, prompt: string): Promise<string | null> => {
    try {
      // Extraer el data de la imagen base64
      const match = base64Image.match(/^data:(.+);base64,(.+)$/);
      if (!match) return null;

      const data = match[2];

      const response = await proxyFetch('/api/gemini/vision', {
        imageData: data,
        prompt
      });

      return (response as any).text || null;
    } catch (error) {
      console.error("Image edit failed", error);
      return null;
    }
};
