import { ThinkingLevel } from '@google/genai';

export const GEMINI_MODEL = 'gemini-3.8-flash';

export const LLM_CONFIG = {
  thinkingLevel: ThinkingLevel.LOW,
} as const;