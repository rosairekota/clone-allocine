import axios from 'axios';
import moviesURL from './ApiURLS';
import { seriesURL } from './ApiURLS';

//moviesURL

//fetchTopRatedMovies
export const fetchTopRatedMovies = async (page = 1, searchItem) => {
    return await (await axios.get(moviesURL(page).urlMoviesRated)).data.results;
};
export const fetchPopularMovies = async (page = 1, searchItem) => {
    return await (await axios.get(moviesURL(page).urlMoviesPopular)).data.results;
};

// TVs Ajax:

export const fetchTopRatedSeries = async (page = 1) => {
    return await (await axios.get(seriesURL(page).seriesURLRated)).data.results;
};
export const fetchPopularSeries = async (page = 1) => {
    return await (await axios.get(seriesURL(page).seriesURLPopular)).data.results;
};

export const fetchMultiSearch = async (searchItem) => {
    return await (await axios.get(moviesURL(1, searchItem).urlSearchMovies)).data.results;
};
