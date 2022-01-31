import React from "react";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import "../../App.css";
import Video from "../../videos/video-1.mp4";
import "../Button/Button.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero__container">
        <video src={Video} autoPlay loop muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero__btn">
          <Button
            className="btns"
            buttonStyle="btn--outlined"
            buttonSize="btn--large"
            childeren="GET STARTED"
          />

          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            childeren="WATCH TRAILER"
          >
            <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      ;
    </>
  );
};

export default HeroSection;
