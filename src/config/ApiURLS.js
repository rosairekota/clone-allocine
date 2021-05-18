const moviesURL = (page, search) => {
  return {
    urlMoviesRated: `${process.env.REACT_APP_API_URL}movie/top_rated?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    urlMoviesPopular: `${process.env.REACT_APP_API_URL}movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}e&language=fr-FR`,
    urlMoviesLatest: `${process.env.REACT_APP_API_URL}movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`,
    urlSearchMovies: `${process.env.REACT_APP_API_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&query=${search}`,
    imagesURL: `https://image.tmdb.org/t/p/w500/`,
    imagesOginalURL: `http://image.tmdb.org/t/p/original/`,
  };
};

export default moviesURL;

export const seriesURL = (page, search) => {
  return {
    seriesURLRated: `${process.env.REACT_APP_API_URL}discover/tv?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    seriesURLPopular: `${process.env.REACT_APP_API_URL}tv/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    seriesURLLatest: `${process.env.REACT_APP_API_URL}movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`,
    urlSearchTVs: `${process.env.REACT_APP_API_URL}movie/{movie_id}?api_key=${process.env.REACT_APP_API_KEY}`,
  };
};
export const ActorsURL = (page, serach) => {
  return {
    actorURLPopular: `${process.env.REACT_APP_API_URL}person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=${page}`,
  };
};
