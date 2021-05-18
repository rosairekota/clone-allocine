import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Navbar.styles';
import Button from '@material-ui/core/Button';

export const ButtonCustom = (props) => {
    return (
        <div className="navbar__search">
            <Button className={props.className}>{props.label}</Button>
        </div>
    );
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
