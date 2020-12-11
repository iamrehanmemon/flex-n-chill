import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { WishListProvider } from "./context/WishListContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishListProvider>
        <App />
      </WishListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
