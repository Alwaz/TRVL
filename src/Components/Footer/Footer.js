import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <section className="footer__subscription">
          <p className="footer__subscription__heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>

          <p className="footer__subscription__test">
            You can unsubcribe anytime.
          </p>

          <div className="input__areas">
            <form>
              <input
                type="email"
                placeholder="your Email"
                className="footer__input"
                name="email"
              />

              <Button buttonStyle="btn--outlined" childeren="Subscribe" />
            </form>
          </div>
        </section>

        <div className="footer__links">
          <div className="footer__link-wrapper">
            <div className="footer__link-items">
              <h2>About Us </h2>
              <Link to="/sign-up">How it works</Link>
              <Link to="/">Testominials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Tersm of Services</Link>
            </div>

            <div className="footer__link-items">
              <h2>Contact Us </h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>

          <div className="footer__link-wrapper">
            <div className="footer__link-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>

            <div className="footer__link-items">
              <h2>Social Media </h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="social__media">
        <div className="social__media-wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              TRVL TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div>

          <small className="website__rights">TRVL © 2022</small>

          <div className="social__icons">
            <Link
              className="social__icon_link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>

            <Link
              className="social__icon_link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>

            <Link
              className="social__icon_link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>

            <Link
              className="social__icon_link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>

            <Link
              className="social__icon_link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
