import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Navbar.styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { SearchMovies } from "../../../pages/search/SearchMovies";

export const ButtonCustom = (props) => {
  const renderButton = () => {
    if (props.label.toLowerCase() === "acteurs") {
      return (
        <Button className={props.className}>
          <Link to={props.link} className={props.linkClass}>
            {props.label}
          </Link>
        </Button>
      );
    } else {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={3}>
            <Button className={props.className}>
              <Link to={props.link}>{props.label}</Link>
            </Button>
          </Grid>
        </Grid>
      );
    }
  };
  return <>{renderButton()}</>;
};
const Navbar = (props) => {
  const [sticky, setSticky] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    handelScroll();
  }, []);
  const handelScroll = () => {
    window.onscroll = () => {
      if (window.scrollY > 240) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  };
  const handleChange = (e) => {
    setRedirect(true);
    if (redirect) {
      return SearchMovies;
    }
  };
  // window.addEventListener("scroll", handelScroll);
  return (
    <Wrapper>
      <div className={sticky ? "navbar__collapse sticky" : "navbar__collapse"}>
        <Link to="/" className="logo">
          WorldMovies
        </Link>
        <ul className="navbar__nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/films"> Films</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>
      </div>
      <form onSubmit={props.handelSubmit}>
        <input
          type="text"
          onChange={handleChange}
          className="inputSearch"
          placeholder="Rechercher une film,une serie,...de votre choix "
          defaultValue=""
        />
      </form>

      <div className="navbar__search">
        <ButtonCustom className="button_chat" label="acteurs" />
      </div>
    </Wrapper>
  );
};

export default Navbar;
