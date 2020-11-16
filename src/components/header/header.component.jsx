import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
// import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSun } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdMenu } from "react-icons/md";
// eslint-disable-next-line
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import Sidebar from "../sidebar/sidebar.component";
// import { Searchbox } from "./../SearchBox/Searchbox";

import "./header.styles.scss";

const themeSwitcher = () => {
  const App = document.getElementById("App");
  const Nav = document.querySelector(".navbox");
  const Sidebar = document.querySelector(".sidebar");
  App.classList.toggle("light");
  Nav.classList.toggle("light");
  Sidebar.classList.toggle("light");
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      var header = document.querySelector(".navbox");
      header.classList.toggle("scrollEffect", window.scrollY > 0);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav">
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
              <Link to="#">
                <AiOutlineSearch className="nav-icon" />
              </Link>
            </li>
            <li className="nav-items" onClick={themeSwitcher}>
              <FaSun className="nav-icon" />
            </li>
            <li className="nav-items" onClick={signInWithGoogle}>
              <span className="row">
                <FcGoogle className="nav-icon" />
                <span className="ml-1">Sign in with Google</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="abcd">
        <Link to="" className="logo">
          Popdog
        </Link>
        <div className="row">
          <li className="nav-items" onClick={themeSwitcher}>
            <FaSun className="nav-icon" />
          </li>
          <li className="nav-items" onClick={toggleSidebar}>
            <MdMenu className="nav-icon" />
          </li>
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Header;
