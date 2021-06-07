import React from "react";
import { Wrapper as WP } from "../top-rated-movies/MoviesRated.styles";
import { Wrapper } from "./Movies.styles";
import moviesURL from "../../../config/ApiURLS";

import "react-image-shadow/assets/index.css";
import { Link } from "react-router-dom";

const Movies = ({ movie: item }) => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src={`${moviesURL(0).imagesURL}${item.poster_path}`}
          alt="Avatar"
          className="image"
        />

        <p className="body__content"> Votes ★★★: {item.vote_count}</p>
        <Link to={`/view-detail/${item.id}`}>
          <div className="overlay">
            <div className="text">{item.title ? item.title : item.name}</div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Movies;
