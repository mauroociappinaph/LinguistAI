import { getClient } from './core';
import { Modality } from '@google/genai';

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
