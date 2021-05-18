import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { Wrapper } from "../home/Home.styles";
import ReactPaginate from "react-paginate";
import _TopRatedMovies from "../../components/layouts/section/top-rated-movies/_TopRatedMovies";

const MoviesPage = (props) => {
	return (
		<Wrapper>
			<Container>
				<h2 id="films">Les Meilleurs Films</h2>
				<ReactPaginate
					previousLabel={"← Précédent"}
					nextLabel={"Suivant →"}
					pageCount={props.pageCount}
					onPageChange={props.handleMoviesRatedPagination}
					containerClassName={"pagination"}
					previousLinkClassName={"pagination__link"}
					nextLinkClassName={"pagination__link"}
					disabledClassName={"pagination__link--disabled"}
					activeClassName={"pagination__link--active"}
				/>
				<Grid container spacing={3} className="grid-container">
					<_TopRatedMovies topRatedMovies={props.moviesRated} />
				</Grid>

				<h2 className="mt-2">Les Films les plus populaires</h2>
				<ReactPaginate
					previousLabel={"← Précédent"}
					nextLabel={"Suivant →"}
					pageCount={10000 / 20}
					onPageChange={props.handleMoviesPopularPagination}
					containerClassName={"pagination"}
					previousLinkClassName={"pagination__link"}
					nextLinkClassName={"pagination__link"}
					disabledClassName={"pagination__link--disabled"}
					activeClassName={"pagination__link--active"}
				/>
				<Grid container spacing={3} className="grid-container">
					{/* <_PopularMovies moviesPopular={props.moviesPopular} /> */}
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default MoviesPage;
