import React from "react";
import moviesURL from "../../../../config/ApiURLS";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Wrapper } from "./_Banner.styles";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const _Banner = ({ topRatedMovies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      <Wrapper>
        <Carousel transitionTime={0.2}>
          {topRatedMovies?.map((item) => (
            <Slider {...settings}>
              <div>
                <img
                  src={`${moviesURL(0).imagesOginalURL}${item.poster_path}`}
                  alt={item.title}
                  className="img-custom"
                />
              </div>
            </Slider>
          ))}
        </Carousel>
      </Wrapper>
    </>
  );
};
export default _Banner;
