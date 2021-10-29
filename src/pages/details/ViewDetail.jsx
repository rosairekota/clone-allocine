import React, { useState } from "react";
import {
  fetchmovieDetails,
  fetchRecommendedsMovies,
} from "../../config/AjaxQueries";
import { UsePage } from "../../hooks/UsePage";
import { CreateReactQuery } from "../../hooks/CreateReactQuery";
import { Wrapper } from "./ViewDetail.styles";
import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { CircularProgressbar } from "react-circular-progressbar";

import moviesURL from "../../config/ApiURLS";
import Recommended from "../../components/movies/recommended/Recommended";
import Button from "@material-ui/core/Button";

const ViewDetail = (props) => {
  const [movieDetailsPage, setmovieDetailsPage] = UsePage(1);
  const [movieType, setMovieType] = useState("movie");

  const {
    data: recommended,
    isLoading: loadingrecommendedMovies,
    isPreviousData: isPreviousrecommendedMovies,
    isFetching: isFetchingmovierecommendedMovies,
    error: errorOfrecommendedMovies,
  } = CreateReactQuery(
    "recommendedMovies",
    String(movieDetailsPage),
    fetchRecommendedsMovies(movieDetailsPage, props.match.params.id, movieType)
  );
  const {
    data: movieDetails,
    isLoading: loadingmovieDetails,
    isPreviousData: isPreviousmovieDetails,
    isFetching: isFetchingmovieDetails,
    error: errorOfmovieDetails,
  } = CreateReactQuery(
    "movieDetails",
    String(movieDetailsPage),
    fetchmovieDetails(movieDetailsPage, props.match.params.id, movieType)
  );
  const isLoading = loadingmovieDetails;
  const error = errorOfmovieDetails;

  if (isLoading) return <LinearProgress />;
  else if (error) return <div>Oups,erreur du serveur..</div>;

  return (
    <>
      <Wrapper>
        <Container>
          <Grid container spacing={2}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3} sm={10}>
                <div className="container">
                  <img
                    src={`${moviesURL(1).imagesURL}${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className="image"
                    r
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={9} sm={12}>
                <div className="container">
                  <h1 className="movie-detail-title">
                    <span>{movieDetails.title}</span>
                    <Typography variant="body2" color="textSecondary">
                      <span> Budget :{movieDetails.budget} $</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Date: {movieDetails.release_date}</span>
                    </Typography>
                  </h1>

                  <div className="detailmovie-flex">
                    <div className="circle-progress">
                      <CircularProgressbar
                        value={Number(movieDetails.vote_count / 100)}
                        text={`${Number(movieDetails.vote_count / 100)}%`}
                      />
                    </div>
                    <p className="movie-users"> Des utilisateurs</p>
                    <div className="navbar__search"></div>
                  </div>
                  <div>
                    <p>{movieDetails.overview}</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <h1>Recommender pour vous</h1>
          <Recommended recommendeds={recommended} />
        </Container>
      </Wrapper>
    </>
  );
};

export default ViewDetail;
