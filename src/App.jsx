import { useState } from "react";
import { UsePage } from "./hooks/UsePage";
import LinearProgress from "@material-ui/core/LinearProgress";

import Navbar from "./components/layouts/navigation/Navbar";

import { fetchTopRatedMovies } from "./config/AjaxQueries";
import { fetchPopularMovies } from "./config/AjaxQueries";
import { CreateReactQuery } from "./hooks/CreateReactQuery";
import Home from "./pages/home/Index";
import { Route, Switch } from "react-router-dom";
import _BannerSection from "./components/layouts/section/banner/_Banner";
import Series from "./pages/series/";
import Movies from "./pages/movies";
import GlobalStyle from "./components/theme/GlobalStyle.styles";
import { calculatePageCount, calculateOffset } from "./helpers/helpes";
import ViewDetail from "./pages/details/ViewDetail";

const PER_PAGE = 20;

const App = () => {
  const [topRatedMoviesPage, setTopRatedMoviesPage] = UsePage(1);
  const [polularMoviesPage, setPolularMoviesPage] = UsePage(1);

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
    String(topRatedMoviesPage),
    fetchTopRatedMovies(topRatedMoviesPage)
  );

  const {
    data: moviesPopular,
    isLoading: loadingMoviesPopular,
    isPreviousData: isPreviousMoviesPopular,
    isFetching: isFetchingMoviesPopular,
    error: errorOfMoviePopular,
  } = CreateReactQuery(
    "moviepopular",
    String(polularMoviesPage),
    fetchPopularMovies(polularMoviesPage)
  );

  const isLoading = loadingMoviesRated && loadingMoviesPopular;
  const error = errorOfMoviePopular && errorOfMoviesRated;
  const isPreviousData = isPreviousMoviesRated && isPreviousMoviesPopular;
  const isFetching = isFetchingMoviesRated && isFetchingMoviesPopular;

  if (isLoading) return <LinearProgress />;
  else if (error) return <div>Oups,erreur du serveur..</div>;

  const handelSubmit = (e) => {
    e.preventDefault();

    searchResult(searchTerm);
  };

  const handleOnSelect = (item) => {
    setSearchTerm(item);
  };
  const handleOnSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleMoviesRatedPagination = ({ selected: selectedPage }) => {
    setTopRatedMoviesPage(selectedPage);
  };

  const handleMoviesPopularPagination = ({ selected: selectedPage }) => {
    setPolularMoviesPage(selectedPage);
  };
  const offset = calculateOffset(topRatedMoviesPage, PER_PAGE);

  return (
    <>
      <GlobalStyle />
      <Navbar
        handelSubmit={handelSubmit}
        handleOnSelect={handleOnSelect}
        handleOnSearch={handleOnSearch}
      ></Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/films">
          <Movies
            moviesRated={moviesRated}
            moviesPopular={moviesPopular}
            topMoviesRatedPage={topRatedMoviesPage}
            pageCount={calculatePageCount(PER_PAGE, 8704)}
            offsets={offset + PER_PAGE}
            offset={offset}
            handleMoviesRatedPagination={handleMoviesRatedPagination}
            handleMoviesPopularPagination={handleMoviesPopularPagination}
          />
        </Route>
        <Route path="/series" component={Series} />

        <Route path="/view-detail/:id" component={ViewDetail} />
      </Switch>
    </>
  );
};

export default App;
