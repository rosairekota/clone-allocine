import { useState } from "react";
import { UsePage } from "./hooks/UsePage";

import Navbar from "./components/layouts/navigation/Navbar";

import {
  fetchPopularMovies,
  fetchTopRatedSeries,
  fetchTopRatedMovies,
  fetchPopularSeries,
  fetchMultiSearch,
} from "./config/AjaxQueries";
import { CreateReactQuery } from "./hooks/CreateReactQuery";
import Home from "./pages/home/Index";
import { Route, Switch } from "react-router-dom";

import Series from "./pages/series/";
import Movies from "./pages/movies";
import GlobalStyle from "./components/theme/GlobalStyle.styles";
import {
  calculatePageCount,
  calculateOffset,
  loarding,
} from "./helpers/helpes";
import ViewDetail from "./pages/details/ViewDetail";
import { ContextApi } from "./hooks/ContextApi";
import Footer from "./components/layouts/footer/Footer";
const PER_PAGE = 20;

const App = () => {
  const [pageNumber, setPageNumber] = UsePage(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const {
    data: moviesRated,
    isLoading: loadingMoviesRated,
    isPreviousData: isPreviousMoviesRated,
    isFetching: isFetchingMoviesRated,
    error: errorOfMoviesRated,
  } = CreateReactQuery(
    "movierated",
    String(pageNumber),
    fetchTopRatedMovies(pageNumber)
  );

  const {
    data: moviesPopular,
    isLoading: loadingMoviesPopular,
    isPreviousData: isPreviousMoviesPopular,
    isFetching: isFetchingMoviesPopular,
    error: errorOfMoviePopular,
  } = CreateReactQuery(
    "moviespopular",
    String(pageNumber),
    fetchPopularMovies(pageNumber)
  );
  const {
    data: topRatedSeries,
    isLoading: loadingTopRatedSeries,
    isPreviousData: isPreviousTopRatedSeries,
    isFetching: isFetchingTopRatedSeries,
    error: errorOfMoviesTopRatedSeries,
  } = CreateReactQuery(
    "topRatedSeries",
    String(pageNumber),
    fetchTopRatedSeries(pageNumber)
  );
  const {
    data: popularSeries,
    isLoading: loadingPopularSeries,
    isPreviousData: isPreviousPopularSeries,
    isFetching: isFetchingPopularSeries,
    error: errorOfMoviesPopularSeries,
  } = CreateReactQuery(
    "popularSeries",
    String(pageNumber),
    fetchPopularSeries(pageNumber)
  );

  const isLoading =
    loadingMoviesRated &&
    loadingMoviesPopular &&
    loadingTopRatedSeries &&
    loadingPopularSeries;
  const error =
    errorOfMoviePopular &&
    errorOfMoviesRated &&
    isPreviousTopRatedSeries &&
    isPreviousPopularSeries;
  const isPreviousData =
    isPreviousMoviesRated &&
    isPreviousMoviesPopular &&
    isFetchingTopRatedSeries &&
    isFetchingPopularSeries;
  const isFetching =
    isFetchingMoviesRated &&
    isFetchingMoviesPopular &&
    errorOfMoviesTopRatedSeries &&
    errorOfMoviesPopularSeries;

  loarding(isLoading, error, isPreviousData, isFetching);

  const handelSubmit = (e) => {
    e.preventDefault();
    searchMovie();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    const results = fetchMultiSearch(e.target.value);

    console.log("toto", results);
  };
  const searchMovie = () => {
    const results = fetchMultiSearch(searchTerm);
    if (results.length < 0) {
      console.log(results);
    }
  };
  const handleMoviesRatedPagination = ({ selected: selectedPage }) => {
    setPageNumber(selectedPage);
  };

  const handleMoviesPopularPagination = ({ selected: selectedPage }) => {
    setPageNumber(selectedPage);
  };
  const offset = calculateOffset(pageNumber, PER_PAGE);

  return (
    <>
      <GlobalStyle />
      <Navbar handelSubmit={handelSubmit} handleChange={handleChange} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/view-detail/:id" component={ViewDetail} />
        <Route path="/films">
          <Movies
            moviesRated={moviesRated}
            moviesPopular={moviesPopular}
            topMoviesRatedPage={pageNumber}
            pageCount={calculatePageCount(PER_PAGE, 8704)}
            offsets={offset + PER_PAGE}
            offset={offset}
            handleMoviesRatedPagination={handleMoviesRatedPagination}
            handleMoviesPopularPagination={handleMoviesPopularPagination}
          />
        </Route>
        <Route path="/series">
          <Series
            moviesRated={topRatedSeries}
            moviesPopular={popularSeries}
            topMoviesRatedPage={pageNumber}
            pageCount={calculatePageCount(PER_PAGE, 8704)}
            offsets={offset + PER_PAGE}
            offset={offset}
            handleMoviesRatedPagination={handleMoviesRatedPagination}
            handleMoviesPopularPagination={handleMoviesPopularPagination}
          />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
