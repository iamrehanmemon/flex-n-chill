import React, { useEffect, useState } from "react";

import CardContainer from "../../components/card-container/card-container.component";

import "./moviepage.style.scss";

const Featured_Api =
  "https://api.themoviedb.org/3/discover/movie?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  // const movies = ["1", "2", "3"];
  useEffect(() => {
    fetch(Featured_Api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="moviepage">
      <CardContainer data={movies} numberOfElements={"20"} />
    </div>
  );
};

export default MoviePage;
