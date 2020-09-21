import React from "react";

import "../Homepage/homepage.component.css";
import Hero from "../../components/hero/hero.component";
import Movie from "../../components/movie/movie.component";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Movie />
    </div>
  );
};

export default HomePage;
