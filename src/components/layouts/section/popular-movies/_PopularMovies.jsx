import React from "react";
import Grid from "@material-ui/core/Grid";
import MoviesPopular from "../../../../movies/popular-movies/PopularMovies";

const _PopularMovies = ({ moviesPopular }) => {
	return (
		<>
			{moviesPopular?.map((item) => (
				<Grid item xs={12} sm={4} md={2} key={item.id}>
					<MoviesPopular movie={item} />
				</Grid>
			))}
		</>
	);
};

export default _PopularMovies;
