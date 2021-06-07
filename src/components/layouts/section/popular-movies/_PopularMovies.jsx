import React from "react";
import Grid from "@material-ui/core/Grid";
import Movies from "../../../movies/base/Movies";

const _PopularMovies = ({ moviesPopular }) => {
  return (
    <>
      <Grid container spacing={3} className="grid-container">
        {moviesPopular?.map((item) => (
          <Grid item xs={12} sm={4} md={2} key={item.id}>
            <Movies movie={item} />
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
};

export default _PopularMovies;
