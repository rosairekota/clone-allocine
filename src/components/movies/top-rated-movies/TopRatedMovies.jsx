import React from 'react';
import { Wrapper } from './TopRatedMovies.styles';
import Movies from '../base/Movies';

const TopRatedMovies = ({ movie }) => {
    return <Movies movie={movie} />;
};

export default TopRatedMovies;
