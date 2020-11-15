import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import { auth, signInWithGoogle } from "./firebase/firebase.utils";

// Components
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";

import Footer from "./components/footer/footer.component";

// Pages
import HomePage from "./pages/Homepage/homepage.component";
import MoviePage from "./pages/MoviePage/moviepage.component.jsx";
import TvShowPage from "./pages/Tv-show-page/tvpage.component";
import GeneralPage from "./pages/General Info Page/general.component";
// import LoginPage from "./pages/LoginPage/loginpage.component";

import "./App.scss";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Router>
      <Switch>
        <div id="App" className="dark">
          {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviePage} />
          <Route path="/tv-shows" component={TvShowPage} />
          {/* <Route path="/general-page" component={GeneralPage} /> */}
          <Route path="/movie/:id" component={GeneralPage} />
          <Route path="/tv/:id" component={GeneralPage} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};
export default App;
