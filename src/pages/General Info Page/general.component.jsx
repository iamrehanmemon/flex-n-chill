import React, { useEffect, useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

import { WishListContext } from "../../context/WishListContext";

import "./general.style.scss";

const IMG_Api = "https://image.tmdb.org/t/p/w1280";

const GeneralPage = ({ category, id }) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const DetailsInfo_Api = `https://api.themoviedb.org/3${history.location.pathname}?api_key=755271bf57e0f95abab8489d7ef60135&language=en-US`;

  const [wishList, setWishList] = useContext(WishListContext);

  useEffect(() => {
    fetch(DetailsInfo_Api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [DetailsInfo_Api]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const addToCart = () => {
    setWishList([
      {
        title: data.title || data.name,
        poster_path: data.poster_path,
        tagline: data.tagline,
        status: data.status,
        imdb_id: data.imdb_id,
        popularity: data.popularity,
        vote_average: data.vote_average,
        release_date: data.release_data
      },
      ...wishList
    ]);
  };

  return (
    <div>
      <ScrollToTop />
      <div
        className="custom_bg"
        style={{
          backgroundImage: `url(${IMG_Api + data.backdrop_path})`,
          backgroundSize: "cover"
        }}
      >
        <div className="overlay">
          <div className="preview container">
            <div className="preview-info">
              <h3 className="title">{data.title || data.name}</h3>
              <h4>{data.tagline}</h4>
              <p className="preview-title">
                <i>Overview</i>
              </p>
              <p>{data.overview}</p>
              <p>{data.vote_average}</p>
              {data.release_date ? (
                <p>
                  <b>Release date : </b>
                  {data.release_date}
                </p>
              ) : null}
              <button className="btn" onClick={addToCart}>
                <span className="btn__text">Add To Wishlist +</span>
              </button>
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
