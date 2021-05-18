import React from "react";
import { Wrapper } from "./Actors.styles";
import moviesURL from "../../config/ApiURLS";

const Actors = ({ actor }) => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src={`${moviesURL(0).imagesURL}${actor.backdrop_path}`}
          alt="Avatar"
          className="image"
        />
        <div className="overlay">
          <div className="text">{actor.name}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Actors;
