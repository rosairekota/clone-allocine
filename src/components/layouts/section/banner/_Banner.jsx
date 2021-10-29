import React from "react";
import moviesURL from "../../../../config/ApiURLS";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Wrapper } from "./_Banner.styles";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { ButtonCustom } from "../../navigation/Navbar";

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

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = null;
  function SimpleModal(props) {
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <iframe
          width="713"
          height="401"
          src={`https://api.themoviedb.org/3/tv/${props.item}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        ;
        <SimpleModal />
      </div>
    );

    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }
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
              <button type="button" onClick={handleOpen}>
                Open Modal
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </Slider>
          ))}
        </Carousel>
        <div className="bg__transparent">
          <h1>
            DECOUVREZ TOUS VOS FILMS ET SERIES AVEC <br />
            <span>WorldMovies</span>
          </h1>
          <ButtonCustom
            className="button_chat"
            label="Découvrir"
            link="/films"
          />
        </div>
      </Wrapper>
    </>
  );
};
export default _Banner;
