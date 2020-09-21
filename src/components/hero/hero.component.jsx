import React from "react";
import { Link } from "react-router-dom";
import "../../components/hero/hero.style.css";
import runningdog from "../../assets/images/running-dog.png";
import youtubelogo from "../../assets/icons/youtube.svg";
import twitchlogo from "../../assets/icons/twitch.svg";
import { FaYoutube, FaTwitch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__content">
        <h1>A new way to find out what's on.</h1>
        <p>
          Sign up with your Twitch or YouTube (soon!) account and watch all of
          your favorite streams here on Popdog. Want more info?
          <Link className="link" href="#">
            Check out our video.
          </Link>
        </p>
        <button className="btn">
          <span className="btn__text">Sign Up with PopDog</span>
        </button>
      </div>
      <div className="hero__img">
        <div className="hero__img--1">
          <img
            src={twitchlogo}
            className="icon-1"
            alt="twitch logo"
            height="80"
            width="80"
          />
          <img
            src={youtubelogo}
            className="icon-2"
            alt="youtube logo"
            height="80"
            width="80"
          />
          {/* <FaTwitch />
          <FaYoutube /> */}
        </div>

        <div className="hero__img--2">
          <img src={runningdog} alt="running dog" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
