import React from "react";

import Hero from "../../components/hero/hero.component";
import Movie from "../../components/movie/movie.component";
import Trailer from "../../components/trailer/trailer.component";
import "./homepage.component.css";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Movie />
      <Trailer />
    </div>
  );
};

export default HomePage;
