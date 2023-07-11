const fetchData = async (apiUrl: string) => {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

export const fetchGifList = async () => {
  const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?q=people&api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }&limit=50`;
  const result = await fetchData(GIPHY_URL);
  return result;
};
