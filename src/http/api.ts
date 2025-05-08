export const giphyApiKey = process.env.EXPO_PUBLIC_GIPHY_API_KEY;

export const giphyApiBaseUrl = "https://api.giphy.com/v1/gifs";

export const fetchRandomGif = async () => {
  const response = await fetch(
    `${giphyApiBaseUrl}/random?api_key=${giphyApiKey}`
  );

  const { data } = await response.json();
  return data;
};

export const searchGifs = async (query: string, offset: number) => {
  const response = await fetch(
    `${giphyApiBaseUrl}/search?api_key=${giphyApiKey}&q=${query}&limit=20&offset=${offset}`
  );

  const { data } = await response.json();
  return data;
};
