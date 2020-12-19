import React, { useEffect, useState } from "react";

import CardContainer from "../../components/card-container/card-container.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

import { motion } from "framer-motion";

import { container_neg_x } from "../../animation";

import "./moviepage.style.scss";

const Featured_Api =
  "https://api.themoviedb.org/3/discover/movie?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(Featured_Api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <motion.div
      className="moviepage"
      variants={container_neg_x}
      initial="hidden"
      animate="show"
    >
      <ScrollToTop />
      <CardContainer
        data={movies}
        numberOfElements={"20"}
        title="Movies"
        category="movie"
        option1="For Rent"
        option2="Streaming"
        option3="On TV"
        option4="In Theaters"
      />
    </motion.div>
  );
};

export default MoviePage;
