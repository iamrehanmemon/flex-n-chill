import React, { useState, createContext } from "react";

export const WishListContext = createContext();

export const WishListProvider = (props) => {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={[wishList, setWishList]}>
      {props.children}
    </WishListContext.Provider>
  );
};
