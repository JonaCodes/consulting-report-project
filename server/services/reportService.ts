// Make sure you've reviewd the README.md file to understand the task and how to access the relevant resources

export const generateReportMarkdown = async (
  companyName: string,
  companyId: string,
  reportType: string
): Promise<string> => {
  const placeholderMarkdown =
    `# ${companyName} — Investment Report` +
    `\n**${companyId}**: *${reportType}*\n\n` +
    `TODO: implement the report using the LLM`;

  return placeholderMarkdown;
};
