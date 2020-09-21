import React from "react";

import "../../components/movie/movie.style.scss";
import Movie1 from "../../assets/images/movie1.jpg";

const Movie = () => {
  return (
    <div className="container">
      <div className="movie-header">
        <span className="title">Top Games</span>
        <div className="custom-select">
          <select>
            <option value="Streaming">Streaming </option>
            <option value="On TV">On TV</option>
            <option selected value="For Rent">
              For Rent
            </option>
            <option value="In Theaters">In Theaters</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
      </div>
      <div className="movie">
        <div className="card">
          <div className="card__img">
            <img className="poster" src={Movie1} alt="Movie1" />
          </div>
          <div className="card__body">
            <h3 className="card__name">Movie Name</h3>
            <p className="card__desc">16 Jul 2020</p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img className="poster" src={Movie1} alt="Movie1" />
          </div>
          <div className="card__body">
            <h3 className="card__name">Movie Name</h3>
            <p className="card__desc">16 Jul 2020</p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img className="poster" src={Movie1} alt="Movie1" />
          </div>
          <div className="card__body">
            <h3 className="card__name">Movie Name</h3>
            <p className="card__desc">16 Jul 2020</p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img className="poster" src={Movie1} alt="Movie1" />
          </div>
          <div className="card__body">
            <h3 className="card__name">Movie Name</h3>
            <p className="card__desc">16 Jul 2020</p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img className="poster" src={Movie1} alt="Movie1" />
          </div>
          <div className="card__body">
            <h3 className="card__name">Movie Name</h3>
            <p className="card__desc">16 Jul 2020</p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img className="poster" src={Movie1} alt="Movie1" />
          </div>
          <div className="card__body">
            <h3 className="card__name">Movie Name</h3>
            <p className="card__desc">16 Jul 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
