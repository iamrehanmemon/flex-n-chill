import React, { useState, useEffect } from "react";

import Hero from "../../components/hero/hero.component";
import CardContainer from "../../components/card-container/card-container.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

import "./homepage.style.scss";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          setTv(data.results);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <ScrollToTop />
      <Hero />
      <CardContainer
        data={movies}
        numberOfElements={"5"}
        title="Movies"
        category="movie"
        option1="For Rent"
        option2="Streaming"
        option3="On TV"
        option4="In Theaters"
      />
      <CardContainer
        data={tv}
        numberOfElements={"5"}
        title="TV Shows"
        category="tv"
        option1="For Rent"
        option2="Streaming"
        option3="On TV"
        option4="In Theaters"
      />
    </div>
  );
};

export default HomePage;
