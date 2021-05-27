import React from "react";
import { Wrapper as WP } from "../top-rated-movies/MoviesRated.styles";
import { Wrapper } from "./Movies.styles";
import moviesURL from "../../../config/ApiURLS";

import "react-image-shadow/assets/index.css";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src={`${moviesURL(0).imagesURL}${movie.poster_path}`}
          alt="Avatar"
          className="image"
        />

        <p className="body__content"> Votes ★★★: {movie.vote_count}</p>
        <Link to={`/view-detail/${movie.id}`}>
          <div className="overlay">
            <div className="text">{movie.title ? movie.title : movie.name}</div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Movies;
