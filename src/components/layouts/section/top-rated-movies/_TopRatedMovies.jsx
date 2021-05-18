import React from "react";
import Grid from "@material-ui/core/Grid";
import Movies from "../../../movies/base/Movies";
import { reactSlickSettings } from "../../../../helpers/helpes";
import Slider from "react-slick";

const _TopRatedMovies = ({ topRatedMovies, label }) => {
  const renderView = () => {
    if (label == "home") {
      return (
        <Slider {...reactSlickSettings}>
          {topRatedMovies?.map((item) => (
            <Movies movie={item} />
          ))}
        </Slider>
      );
    } else {
      {
        return (
          <Grid container spacing={3} className="grid-container">
            {topRatedMovies?.map((item) => (
              <Grid item xs={12} sm={4} md={2} key={item.id}>
                <Movies movie={item} />
              </Grid>
            ))}
            ;
          </Grid>
        );
      }
    }
  };
  return <>{renderView()}</>;
};

export default _TopRatedMovies;
