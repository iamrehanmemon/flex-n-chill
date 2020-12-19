import React, { useContext } from "react";

import { WishListContext } from "../../context/WishListContext";
import { UserContext } from "../../context/UserContext";

import "./wishlist.style.scss";

const IMG_Api = "https://image.tmdb.org/t/p/w1280";

const WishlistPage = () => {
  const [wishList] = useContext(WishListContext);
  const [currentUser] = useContext(UserContext);

  return (
    <div>
      <div className="list container">
        {currentUser !== null ? (
          <div>
            <h2>Hello {currentUser.displayName} </h2>
            <h3>Wishlist Associated with {currentUser.email}</h3>
          </div>
        ) : (
          <h2>Wishlist</h2>
        )}
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
      </div>
    </div>
  );
};
export default WishlistPage;
