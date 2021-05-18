import React, { useEffect, useState } from "react";
import {
  fetchPopularActors,
  fetchTopRatedMovies,
} from "../../config/AjaxQueries";
import { fetchTopRatedSeries } from "../../config/AjaxQueries";

import { CreateReactQuery } from "../../hooks/CreateReactQuery";

// components(

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";

import { Wrapper } from "./Home.styles";
import _BannerSection from "../../components/layouts/section/banner/_Banner";
import { ButtonCustom } from "../../components/layouts/navigation/Navbar";
import _MoviesRatedSection from "../../components/layouts/section/top-rated-movies/_TopRatedMovies";
import _TVSRatedSection from "../../components/layouts/section/series/_TopRatedMovies";
import { Link } from "react-router-dom";
import _ActorsSection from "../../components/layouts/section/actrors/_ActorsSection";
import { usePage } from "../../hooks/usePage";

// css

// Queries of MOVI API

const HomePage = (props) => {
  const [movieRatedPage, setMovieRatedPage] = usePage(1);
  const [movieSeriesRated, setMovieSeriesRated] = usePage(1);
  const [PopularactorsPage, setPopularactors] = usePage(1);
  const [searchData, setSearchDate] = usePage("");

  const {
    data: moviesRated,
    isLoading: loadingMoviesRated,
    isPreviousData: isPreviousMoviesRated,
    isFetching: isFetchingMoviesRated,
    error: errorOfMoviesRated,
  } = CreateReactQuery(
    "moviesRated",
    String(movieRatedPage),
    fetchTopRatedMovies(movieRatedPage)
  );

  const {
    data: SeriesRated,
    isLoading: loadingSeriesRated,
    isPreviousData: isPreviousSeriesRated,
    isFetching: isFetchingSeriesRated,
    error: errorOfMoviePopular,
  } = CreateReactQuery(
    "SeriesRated",
    String(movieSeriesRated),
    fetchTopRatedSeries(movieSeriesRated)
  );

  const {
    data: Popularactors,
    isLoading: loadingPopularactors,
    isPreviousData: isPreviousPopularactors,
    isFetching: isFetchingPopularactors,
    error: errorOfPopularactors,
  } = CreateReactQuery(
    "SeriesRated",
    String(PopularactorsPage),
    fetchPopularActors(PopularactorsPage)
  );

  const isLoading = loadingMoviesRated && loadingSeriesRated;
  const error = errorOfMoviePopular && errorOfMoviesRated;
  const isPreviousData = isPreviousMoviesRated && isPreviousSeriesRated;
  const isFetching = isFetchingMoviesRated && isFetchingSeriesRated;

  if (isLoading) return <LinearProgress />;
  else if (error) return <div>Oups,erreur du serveur..</div>;

  return (
    <div>
      <_BannerSection topRatedMovies={SeriesRated} />
      <Wrapper>
        <Container>
          <h2>Les Meilleurs Films</h2>

          <_MoviesRatedSection topRatedMovies={moviesRated} label="home" />

          <ButtonCustom
            className="button_chat"
            label="Voir plus"
            link="/films"
          />

          <h2 className="mt-2">Les Meilleurs Series</h2>

          <_TVSRatedSection topRatedSeries={SeriesRated} label="home" />

          <ButtonCustom
            className="button_chat"
            label="Voir plus"
            link="/series"
          />

          <h2 className="mt-2">Les Acteurs Les Plus populaires</h2>
          <_ActorsSection Popularactors={Popularactors} />
        </Container>
      </Wrapper>
    </div>
  );
};

export default HomePage;
