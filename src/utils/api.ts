const fetchData = async (apiUrl: string) => {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    const result = json.results;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const fetchImgList = async (keyword: string) => {
  const UNSPLASH_URL = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${
    import.meta.env.VITE_API_KEY
  }&per_page=30`;
  const result = await fetchData(UNSPLASH_URL);
  return result;
};
