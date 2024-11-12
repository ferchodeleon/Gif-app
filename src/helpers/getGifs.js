export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=y88zzx2vJ7wTjLeV4jLjoPy61O9fGfFH&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images["downsized_medium"].url,
  }));
  return gifs;
};
