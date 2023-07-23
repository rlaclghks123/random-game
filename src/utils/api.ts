import axios, { AxiosResponse } from 'axios';

const fetchData = async (apiUrl: string) => {
  try {
    const response: AxiosResponse = await axios(apiUrl);
    return response;
  } catch (err) {
    return err?.response;
  }
};

export const fetchGifList = async () => {
  const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?q=people&api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }&limit=50`;
  const result = await fetchData(GIPHY_URL);
  return result;
};
