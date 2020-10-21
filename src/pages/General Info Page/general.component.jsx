import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import "./general.style.scss";

const IMG_Api = "https://image.tmdb.org/t/p/w1280";

const GeneralPage = ({ category, id }) => {
  const history = useHistory();
  console.log(history.location);
  const DetailsInfo_Api = `https://api.themoviedb.org/3${history.location.pathname}?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(DetailsInfo_Api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [DetailsInfo_Api]);

  return (
    <div className="preview">
      <div className="left">
        <img
          className="poster"
          src={IMG_Api + data.poster_path}
          alt={data.title}
        />
      </div>
      <div className="right">
        <h3>{data.title || data.name}</h3>
        <p>{data.vote_average}</p>
      </div>
    </div>
  );
};

export default GeneralPage;
