import axios from "axios";
import moviesURL from "./ApiURLS";
import { seriesURL } from "./ApiURLS";
import { ActorsURL } from "./ApiURLS";

//moviesURL

//fetchTopRatedMovies
export const fetchTopRatedMovies = async (page = 1, searchItem) => {
  return await (
    await axios.get(moviesURL(page).urlMoviesRated)
  ).data.results;
};
export const fetchPopularMovies = async (page = 1, searchItem) => {
  return await (
    await axios.get(moviesURL(page).urlMoviesPopular)
  ).data.results;
};
export const fetchmovieDetails = async (page = 1, movieId = 1, movieType) => {
  return await (
    await axios.get(
      `${process.env.REACT_APP_API_URL}${movieType}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    )
  ).data;
};

export const fetchRecommendedsMovies = async (
  page = 1,
  movieId = 1,
  movieType
) => {
  return await (
    await axios.get(
      `${process.env.REACT_APP_API_URL}${movieType}/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    )
  ).data.results;
};

// TVs Ajax:

export const fetchTopRatedSeries = async (page = 1) => {
  return await (
    await axios.get(seriesURL(page).seriesURLRated)
  ).data.results;
};
export const fetchPopularSeries = async (page = 1) => {
  return await (
    await axios.get(seriesURL(page).seriesURLPopular)
  ).data.results;
};
export const fetchPopularActors = async (page = 1) => {
  return await (
    await axios.get(ActorsURL(page).actorURLPopular)
  ).data.results;
};

export const fetchMultiSearch = async (searchItem) => {
  return await (
    await axios.get(moviesURL(1, searchItem).urlSearchMovies)
  ).data.results;
};
