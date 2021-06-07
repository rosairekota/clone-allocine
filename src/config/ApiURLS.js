const moviesURL = (page, search = "", movie_id, movieType = "") => {
  return {
    urlMoviesRated: `${process.env.REACT_APP_API_URL}movie/top_rated?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    urlMoviesPopular: `${process.env.REACT_APP_API_URL}movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    urlMoviesLatest: `${process.env.REACT_APP_API_URL}movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`,
    urlMovieDetails: `${process.env.REACT_APP_API_URL}movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    urlSearchMovies: `${process.env.REACT_APP_API_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&query=${search}`,
    imagesURL: `https://image.tmdb.org/t/p/w500/`,
    imagesOginalURL: `http://image.tmdb.org/t/p/original/`,
    videosURL: `https://api.themoviedb.org/3/tv/${movie_id}/videos?api_key=${process.env.REACT_APP_API_URL}&language=fr-FR`,
  };
};

export default moviesURL;

export const seriesURL = (page, search) => {
  return {
    seriesURLRated: `${process.env.REACT_APP_API_URL}discover/tv?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    seriesURLPopular: `${process.env.REACT_APP_API_URL}tv/top_rated?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`,
    seriesURLLatest: `${process.env.REACT_APP_API_URL}movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`,
    urlSearchTVs: `${process.env.REACT_APP_API_URL}movie/{movie_id}?api_key=${process.env.REACT_APP_API_KEY}`,
  };
};
export const ActorsURL = (page, serach) => {
  return {
    actorURLPopular: `${process.env.REACT_APP_API_URL}person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=${page}`,
  };
};
