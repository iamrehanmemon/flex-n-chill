import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

// Pages
import HomePage from "./pages/Homepage/homepage.component";
import MoviePage from "./pages/MoviePage/moviepage.component.jsx";
import { TvShowPage } from "./pages/Tv-show-page/TvShowPage";

import "./App.scss";

const App = () => (
  <Router>
    <Switch>
      <div id="App" className="dark">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviePage} />
        <Route path="/tv-shows" component={TvShowPage} />
        <Footer />
      </div>
    </Switch>
  </Router>
);

export default App;
