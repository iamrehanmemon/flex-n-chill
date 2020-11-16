import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./general.style.scss";

const IMG_Api = "https://image.tmdb.org/t/p/w1280";

const GeneralPage = ({ category, id }) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const DetailsInfo_Api = `https://api.themoviedb.org/3${history.location.pathname}?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US`;

  const isLogged = useSelector((state) => state.isLogged);

  useEffect(() => {
    fetch(DetailsInfo_Api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [DetailsInfo_Api]);

  return (
    <div>
      <div
        className="custom_bg"
        style={{
          backgroundImage: `url(${IMG_Api + data.backdrop_path})`,
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <div className="overlay">
          <div className="preview container">
            <div className="preview-info">
              <h3 className="title">{data.title || data.name}</h3>
              <p>{data.tagline}</p>
              <p className="preview-title">
                <i>Overview</i>
              </p>
              <p>{data.overview}</p>
              <p>{data.vote_average}</p>
              <p>
                <b>Release date : </b>
                {data.release_date}
              </p>
              {isLogged ? (
                <button className="btn">
                  <span className="btn__text">Add To Watchlist +</span>
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="preview-img">
              <img
                className="poster-img"
                src={IMG_Api + data.poster_path}
                alt={data.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
