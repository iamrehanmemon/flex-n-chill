import React, { useContext } from "react";

import { WishListContext } from "../../context/WishListContext";

import "./watchlist.style.scss";

const WatchlistPage = () => {
  const [wishList] = useContext(WishListContext);

  return (
    <div>
      <div className="list container dark">
        <h1>Watchlist</h1>
        {wishList
          ? wishList.map((wishListItem) => (
              <li className="list-item">
                <h3>{wishListItem.title}</h3>
                <div className="list-row">
                  <img
                    src="https://beautifulcoolwallpapers.files.wordpress.com/2011/07/naturewallpaper.jpg"
                    alt=""
                  />
                  <div className="list-wrap">
                    <p>{wishListItem.tagline}</p>
                    <div className="list-row">
                      <span>{wishListItem.vote_average}</span>
                      <button className="btn">
                        <span className="btn__text">Watch Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          : null}
        <button className="btn-block">
          <span className="btn__text">Go to Wishlist</span>
        </button>
      </div>
    </div>
  );
};
export default WatchlistPage;
