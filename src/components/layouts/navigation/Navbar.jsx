import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Navbar.styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export const ButtonCustom = (props) => {
  const renderButton = () => {
    if (props.label == "chat") {
      return (
        <Button className={props.className}>
          <Link to={props.link}>{props.label}</Link>
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
  return (
    <Wrapper>
      <div className="navbar__collapse">
        <Link to="/" className="logo">
          Rmovies
        </Link>
        <ul className="navbar__nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/films"> Films</Link>
          </li>
          <li>
            <Link to="/banner">Series</Link>
          </li>
        </ul>
      </div>
      <form onSubmit={props.handelSubmit}>
        <input
          type="text"
          onChange={props.handleOnSearch}
          className="inputSearch"
          placeholder="Rechercher film,..serie... "
          defaultValue=""
        />
      </form>

      <div className="navbar__search">
        <ButtonCustom className="button_chat" label="chat" />
      </div>
    </Wrapper>
  );
};

export default Navbar;
