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
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
