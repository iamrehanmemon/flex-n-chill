import React, { useState, useEffect } from "react";

import Hero from "../../components/hero/hero.component";
import CardContainer from "../../components/card-container/card-container.component";
import Trailer from "../../components/trailer/trailer.component";

import "./homepage.style.scss";

const Featured_Api =
  "https://api.themoviedb.org/3/discover/movie?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(Featured_Api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="homepage">
      <Hero />
      <CardContainer data={movies} numberOfElements={"6"} />
      <Trailer />
    </div>
  );
};

export default HomePage;
