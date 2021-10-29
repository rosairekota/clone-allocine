import React from "react";
import { ButtonCustom } from "../navigation/Navbar";
import { Wrapper } from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-nav-left">
        <ul>
          <li>
            <Link to="">Acteurs</Link>
          </li>
          <li>
            <Link to="/films"> Films</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <ButtonCustom
          className="button_chat"
          label="contact"
          linkClass="link-class"
        />
      </div>
      <div className="footer-nav-right">
        <ul>
          <li>
            <Link to="/"> Cookies</Link>
          </li>
          <li>
            <Link to="/">Confidentialités</Link>
          </li>

          <li></li>
          <li>
            <Link to="/">Nouveautés</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Footer;
