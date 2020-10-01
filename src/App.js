import React from "react";
import Header from "./components/header/header.component";
import HomePage from "./pages/Homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import "./App.css";


const App = () => (
  <div id="App" className="dark">
    <Header />
    <HomePage />
    <Footer />
  </div>
);

export default App;
