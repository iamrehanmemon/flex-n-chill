import React from "react";
import Header from "../src/components/header/header.component";
import "./App.css";
import HomePage from "./pages/Homepage/homepage.component";

const App = () => (
  <div id="App" className="dark">
    <Header />
    <HomePage />
    <HomePage />
  </div>
);

export default App;
