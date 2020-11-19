import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "../../components/hero/hero.style.css";
import runningdog from "../../assets/images/running-dog.png";
import youtubelogo from "../../assets/icons/youtube.svg";
import twitchlogo from "../../assets/icons/twitch.svg";

const container = {
  hidden: { y: 50 },
  show: {
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" }
  }
};

// const item = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 }
// };

const Hero = () => (
  <div className="hero container">
    <motion.div
      className="hero__content"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h1>A new way to find out what's on.</h1>
      <p>
        Sign up with your Twitch or YouTube (soon!) account and watch all of
        your favorite streams here on Popdog. Want more info?
        <Link className="link" to="#">
          Check out our video.
        </Link>
      </p>
      <motion.button className="btn">
        <span className="btn__text">Sign Up with PopDog</span>
      </motion.button>
    </motion.div>
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

export default Hero;
