import React from 'react';
import { Wrapper as WP } from '../top-rated-movies/MoviesRated.styles';
import { Wrapper } from './Movies.styles';
import moviesURL from '../../../config/ApiURLS';

import 'react-image-shadow/assets/index.css';

const Movies = ({ movie }) => {
    return (
        <Wrapper>
            {/* <div className="card">
                <div className="card__header">
                    <ImageShadow src={`${moviesURL(0).imagesURL}${movie.poster_path}`} />
                </div>
                <div className="card__body">
                    <h4>{movie.title ? movie.title : movie.name}</h4>

                    <p className="body__content">Votes★★★:{movie.vote_count}</p>

                    <Button label="En savoir plus" />
                </div>
            </div> */}
            <div className="container">
                <img src={`${moviesURL(0).imagesURL}${movie.poster_path}`} alt="Avatar" className="image" />
                <div className="overlay">
                    <div className="text">{movie.title ? movie.title : movie.name}</div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Movies;
