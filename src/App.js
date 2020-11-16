import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

// Pages
import HomePage from "./pages/Homepage/homepage.component";
import MoviePage from "./pages/MoviePage/moviepage.component.jsx";
import TvShowPage from "./pages/Tv-show-page/tvpage.component";
import GeneralPage from "./pages/General Info Page/general.component";

import "./App.scss";

const App = () => {
  return (
    <div id="App" className="dark">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviePage} />
        <Route path="/tv-shows" component={TvShowPage} />
        <Route path="/movie/:id" component={GeneralPage} />
        <Route path="/tv/:id" component={GeneralPage} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
