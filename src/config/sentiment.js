import axios from 'axios';

export const analyzeSentiment = async (text) => {
  const API_KEY = process.env.NEXT_PUBLIC_TEXTRAZOR_API_KEY;

  try {
    const response = await axios.post(
      'https://api.textrazor.com/',
      { extractors: 'entities,topics', text },
      { headers: { 'x-textrazor-key': API_KEY } }
    );
    return response.data.response;
  } catch (error) {
    console.error('Sentiment analysis error: ', error);
    return null;
  }
};
