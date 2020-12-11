import React, { useContext } from "react";

import "./dropdown.scss";

import { WishListContext } from "../../context/WishListContext";

export default function Dropdown() {
  const [wishList] = useContext(WishListContext);

  return (
    <ul className="dropdown dark">
      {wishList
        ? wishList.map((wishListItem) => (
            <li className="dropdown-item">
              <h3>{wishListItem.title}</h3>
              <div className="row">
                <img
                  src="https://beautifulcoolwallpapers.files.wordpress.com/2011/07/naturewallpaper.jpg"
                  alt=""
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
              <button className="btn-block">
                <span className="btn__text">Go to Wishlist</span>
              </button>
            </li>
          ))
        : null}
    </ul>
  );
}
