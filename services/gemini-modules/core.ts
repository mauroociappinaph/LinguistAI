import { GoogleGenAI } from "@google/genai";

export const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });
