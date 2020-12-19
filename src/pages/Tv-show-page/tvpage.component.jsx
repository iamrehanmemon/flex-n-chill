import React, { useEffect, useState } from "react";

import CardContainer from "../../components/card-container/card-container.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

import { motion } from "framer-motion";

import { container_neg_x } from "../../animation";
import "./tvshowpage.style.scss";

const TvShowPage = () => {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setTv(data.results);
      });
  }, []);

  return (
    <motion.div
      className="tvpage"
      variants={container_neg_x}
      initial="hidden"
      animate="show"
    >
      <ScrollToTop />
      <CardContainer
        data={tv}
        numberOfElements={"20"}
        title="Tv Shows"
        category="tv"
        option1="For Rent"
        option2="Streaming"
        option3="On TV"
        option4="In Theaters"
      />
    </motion.div>
  );
};

export default TvShowPage;
