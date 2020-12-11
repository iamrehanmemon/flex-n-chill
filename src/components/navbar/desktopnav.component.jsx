import React, { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { AiOutlineSearch } from "react-icons/ai";
import { VscColorMode } from "react-icons/vsc";
import { GoChecklist } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

import Dropdown from "../dropdown/dropdown";

const themeSwitcher = () => {
  const App = document.getElementById("App");
  const Nav = document.querySelector(".navbox");

  App.classList.toggle("light");
  Nav.classList.toggle("light");
};

const DesktopNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  // const toggleSearchbar = () => {
  //   setIsSearchbarOpen(!isSearchbarOpen);
  //   document.querySelector(".navbox").classList.toggle("visibility");
  //   document.querySelector(".mobile-nav").classList.toggle("visibility");
  // };

  const toggleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearchbar = () => {
    setIsSearchbarOpen(!isSearchbarOpen);
    document.querySelector(".mobile-nav").classList.toggle("visibility");
  };

  return (
    <div className="navbox dark">
      <div className="navcontent">
        <ul className="nav">
          <li>
            <Link to="/" className="logo">
              Popdog
            </Link>
          </li>
          <li>
            <Link to="/movies" className="nav-items">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className="nav-items">
              TV Shows
            </Link>
          </li>
        </ul>
      </div>
      <div className="navcontent">
        <ul className="nav">
          <li className="nav-items">
            <span onClick={toggleSearchbar}>
              <AiOutlineSearch className="nav-icon" />
            </span>
          </li>
          <li className="nav-items" onClick={themeSwitcher}>
            <VscColorMode className="nav-icon" />
          </li>
          <li className="nav-items" onClick={signInWithGoogle}>
            <FcGoogle className="nav-icon" />
            <span className="ml-1 google">Sign in with Google</span>
          </li>
          <li className="nav-items" onClick={toggleDropdownMenu}>
            <GoChecklist className="nav-icon" />
          </li>
        </ul>
      </div>
      {isDropdownOpen ? <Dropdown /> : null}
    </div>
  );
};

export default DesktopNav;
