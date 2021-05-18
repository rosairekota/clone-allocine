import React, { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../../config/AjaxQueries";
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

// css

// Queries of MOVI API

const HomePage = (props) => {
	const [movieRatedPage, setMovieRatedPage] = useState(1);
	const [movieTVSRated, setMovieTVSRated] = useState(1);
	const [searchData, setSearchDate] = useState("");

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
		data: TVSRated,
		isLoading: loadingTVSRated,
		isPreviousData: isPreviousTVSRated,
		isFetching: isFetchingTVSRated,
		error: errorOfMoviePopular,
	} = CreateReactQuery(
		"TVSRated",
		String(movieTVSRated),
		fetchTopRatedSeries(movieTVSRated)
	);

	const isLoading = loadingMoviesRated && loadingTVSRated;
	const error = errorOfMoviePopular && errorOfMoviesRated;
	const isPreviousData = isPreviousMoviesRated && isPreviousTVSRated;
	const isFetching = isFetchingMoviesRated && isFetchingTVSRated;

	if (isLoading) return <LinearProgress />;
	else if (error) return <div>Oups,erreur du serveur..</div>;

	return (
		<div>
			<_BannerSection topRatedMovies={TVSRated} />
			<Wrapper>
				<Container>
					<h2>Les Meilleurs Films</h2>

					<_MoviesRatedSection topRatedMovies={moviesRated} />

					<ButtonCustom className="button_chat" label="Voir plus">
						<Link to="/films">Voir plus</Link>
					</ButtonCustom>

					<h2 className="mt-2">Les Meilleurs Series</h2>
					<Grid container spacing={3} className="grid-container">
						<_TVSRatedSection topRatedSeries={TVSRated} />
					</Grid>
					<ButtonCustom className="button_chat" label="Voir plus">
						<Link to="/series">Voir plus</Link>
					</ButtonCustom>
				</Container>
			</Wrapper>
		</div>
	);
};

export default HomePage;
