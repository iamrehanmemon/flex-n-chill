import React from "react";
import "./card.style.scss";
const IMG_Api = "https://image.tmdb.org/t/p/w1280";

const Card = ({ title, name, poster_path, overview, vote_average }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__img">
          <img className="poster" src={IMG_Api + poster_path} alt={title} />
        </div>
        <div className="card__body">
          <h3 className="card__name">{title || name}</h3>
          <p className="card__desc">{vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
