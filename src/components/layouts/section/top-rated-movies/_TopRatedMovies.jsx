import React from "react";
import Grid from "@material-ui/core/Grid";
import Movies from "../../../movies/base/Movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const _TopRatedMovies = ({ topRatedMovies }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<>
			<Slider {...settings}>
				{topRatedMovies?.map((item) => (
					<Movies movie={item} />
				))}
			</Slider>
		</>
	);
};

export default _TopRatedMovies;
