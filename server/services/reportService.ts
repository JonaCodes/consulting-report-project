import { getCompanyData } from './dbService';
import { getNewsData } from './newsService';
import { askGemini } from './llmService';
import {
  HIGH_LEVEL_SYSTEM_PROMPT,
  DETAILED_SYSTEM_PROMPT,
  createUserPrompt,
} from '../prompts/investmentPrompts';
import { GEMINI_MODEL } from '../config/constants';

export const generateReportMarkdown = async (
  companyName: string,
  companyId: string,
  reportType: string
): Promise<string> => {
  try {
    const [companyData, newsData] = await Promise.all([
      getCompanyData(companyId),
      getNewsData(companyId),
    ]);

    const systemPrompt =
      reportType === 'high-level'
        ? HIGH_LEVEL_SYSTEM_PROMPT
        : DETAILED_SYSTEM_PROMPT;

    const userPrompt = createUserPrompt(companyName, companyData, newsData);

    const report = await askGemini(GEMINI_MODEL, systemPrompt, userPrompt);
    return report.replace(/\n\n/g, '\n').replace(/\n/g, '\n\n');
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
};
