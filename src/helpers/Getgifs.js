export const getGif = async function (imagen) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Cp7SrqvYb079VqqAt2nKgSyqb09fw4JJ&q=${imagen}&limit=3`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((e) => ({
      id: e.id,
      title: e.title,
      url: e.images.downsized_medium.url,
    }));
    console.log(gifs);

    return gifs
  };


