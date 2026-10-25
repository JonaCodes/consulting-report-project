import { GoogleGenAI } from '@google/genai';
import { LLM_CONFIG } from '../config/constants';

const gemini = new GoogleGenAI({});

export const askGemini = async (
  model: string,
  systemPrompt: string,
  userPrompt: string
): Promise<string> => {
  try {
    const result = await gemini.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        thinkingConfig: {
          thinkingLevel: LLM_CONFIG.thinkingLevel,
        },
      },
    });

    const response = result;
    return response.text || '';
  } catch (error) {
    console.error('Error generating content with LLM:', error);
    throw error;
  }
};
