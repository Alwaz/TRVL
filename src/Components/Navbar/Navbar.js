import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            TRVL <i className="fab fa-typo3" />
          </Link>
        </div>
        <div className="menu__icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav__menu active" : "nav__menu"}>
          <li className="nav__item">
            <Link to="/" className="nav__links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/services"
              className="nav__links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/product"
              className="nav__links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              SIGN UP
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline" childeren="SIGN UP" />}
      </nav>
    </>
  );
};

export default Navbar;
