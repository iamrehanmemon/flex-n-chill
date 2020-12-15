import React, { useContext } from "react";

import { WishListContext } from "../../context/WishListContext";

import "./watchlist.style.scss";

const IMG_Api = "https://image.tmdb.org/t/p/w1280";

const WatchlistPage = () => {
  const [wishList] = useContext(WishListContext);

  return (
    <div>
      <div className="list container dark">
        <h1>Watchlist</h1>
        <li className="list-item">
          {wishList
            ? wishList.map((wishListItem) => (
                <div>
                  <h3>{wishListItem.title}</h3>
                  <div className="list-row">
                    <img
                      src={IMG_Api + wishListItem.poster_path}
                      alt={wishListItem.title}
                      className="display-img"
                    />
                    <div className="list-wrap">
                      <p>{wishListItem.tagline}</p>
                      <div className="list-row">
                        <span>{wishListItem.vote_average}</span>
                        <button className="btn-v2">
                          <span className="btn__text">Watch Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </li>
        <button className="btn-block">
          <span className="btn__text">Go to Wishlist</span>
        </button>
      </div>
    </div>
  );
};
export default WatchlistPage;
