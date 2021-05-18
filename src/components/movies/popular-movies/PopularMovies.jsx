import React from "react";
import Movies from "../base/Movies";
import { Wrapper } from "./PopularMovies.styles";

const PopularMovies = ({ movie }) => {
	return <Movies movie={movie} />;
};

export default PopularMovies;
