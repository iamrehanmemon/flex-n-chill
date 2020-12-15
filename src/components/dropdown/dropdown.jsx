import React, { useContext } from "react";

import "./dropdown.scss";

import { WishListContext } from "../../context/WishListContext";

const IMG_Api = "https://image.tmdb.org/t/p/w1280";

export default function Dropdown() {
  const [wishList] = useContext(WishListContext);
  console.log(wishList);

  return (
    <ul className="dropdown dark">
      <h2>WishList</h2>
      {wishList
        ? wishList.map((wishListItem) => (
            <li className="dropdown-item">
              <h3>{wishListItem.title}</h3>
              <div className="row">
                <img
                  src={IMG_Api + wishListItem.poster_path}
                  alt={wishListItem.title}
                />
                <div className="wrap">
                  <p>{wishListItem.tagline}</p>
                  <div className="row">
                    <span>{wishListItem.vote_average}</span>
                    <button className="btn-v2">
                      <span className="btn__text">Watch Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))
        : null}
      <button className="btn-block" Link to="/watchlist">
        <span className="btn__text">Go to Wishlist</span>
      </button>
    </ul>
  );
}
