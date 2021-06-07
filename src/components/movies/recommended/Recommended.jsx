import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import moviesURL from "../../../config/ApiURLS";
import { Wrapper } from "./Recommended.styles";
import { reactSlickSettings } from "../../../helpers/helpes";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Recommended = ({ recommendeds }) => {
  return (
    <Wrapper>
      <Slider {...reactSlickSettings}>
        {recommendeds?.map((movie) => (
          <GridListTile key={movie.id} className="image">
            <Link to={`/view-detail/${movie.id}`}>
              <img
                src={`${moviesURL(0).imagesURL}${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <GridListTileBar
              title={movie.title}
              subtitle={<span>Date: {movie.release_date}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${movie.title}`}>
                  <Link to={`/view-detail/${movie.id}`}>
                    <InfoIcon className="icon" />
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </Slider>
    </Wrapper>
  );
};
export default Recommended;
