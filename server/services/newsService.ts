export const getNewsData = async (companyId: string) => {
  try {
    const response = await fetch(`https://news-api.jona-581.workers.dev/?id=${companyId}`);

    if (!response.ok) {
      throw new Error(`News API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news data:', error);
    throw error;
  }
};