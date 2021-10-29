import React from "react";
import Container from "@material-ui/core/Container";

import { Wrapper } from "./movies.styles";
import ReactPaginate from "react-paginate";
import _TopRatedMovies from "../../components/layouts/section/top-rated-movies/_TopRatedMovies";
import _PopularMovies from "../../components/layouts/section/popular-movies/_PopularMovies";

const MoviesPage = (props) => {
  return (
    <Wrapper>
      <Container>
        <div className="moviesRated">
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

          <_TopRatedMovies topRatedMovies={props.moviesRated} />
        </div>

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

        <_PopularMovies moviesPopular={props.moviesPopular} />
      </Container>
    </Wrapper>
  );
};

export default MoviesPage;
