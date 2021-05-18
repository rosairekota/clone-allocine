import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const calculateOffset = (perPage, currentPage) => {
  return perPage * currentPage;
};

export const calculatePageCount = (perPage, totalPages) => {
  return Math.ceil(totalPages / perPage);
};

export const reactSlickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
