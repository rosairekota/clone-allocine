import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinearProgress from "@material-ui/core/LinearProgress";

export const calculateOffset = (perPage, currentPage) => {
  return perPage * currentPage;
};

export const calculatePageCount = (perPage, totalPages) => {
  return Math.ceil(totalPages / perPage);
};
export const PER_PAGE = 20;

export const loarding = (isLoading, error, isPreviousData, isFetching) => {
  if (isLoading) return <LinearProgress />;
  else if (error) return <div>Oups,erreur du serveur..</div>;
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
