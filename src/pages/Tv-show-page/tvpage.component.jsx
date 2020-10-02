import React, { useEffect, useState } from "react";

import CardContainer from "../../components/card-container/card-container.component";

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
    <div className="tvpage">
      <CardContainer
        data={tv}
        numberOfElements={"20"}
        title="Tv Shows"
        option1="For Rent"
        option2="Streaming"
        option3="On TV"
        option4="In Theaters"
      />
    </div>
  );
};

export default TvShowPage;
