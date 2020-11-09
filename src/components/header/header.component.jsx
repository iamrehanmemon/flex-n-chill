import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSun } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "./header.styles.scss";

const themeSwitcher = () => {
  const App = document.getElementById("App");
  const Nav = document.querySelector(".navbox");
  App.classList.toggle("light");
  Nav.classList.toggle("light");
};

// const handleOnSubmit = (e) => {
//   e.preventDefault();
// };

// const handleOnChange = (e) => {
//   setSearchTerm(e.target.value);
// };

const Header = () => {
  // const [searchTerm,setSearchTerm] = useState('');

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
    <div className="header" id="Nav">
      <div className="nav">
        <div className="navbox dark">
          <div className="navcontent">
            <ul className="nav">
              <li>
                <Link to="" className="logo">
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
                {/* <form onSubmit={handleOnSubmit}></form> */}
                {/* <input
                  className="search"
                  type="text"
                  placeholder="Search.."
                  // value={searchTerm}
                  // onChange={handleOnChange}
                /> */}
              </li>
              <li className="nav-items">
                <AiOutlineSearch className="nav-icon" />
              </li>

              <li>
                <Link className="nav-items">Join the Community</Link>
              </li>

              <li className="nav-items">
                <FiPlusCircle className="nav-icon" />
              </li>

              <li className="nav-items" onClick={themeSwitcher}>
                <FaSun className="nav-icon" />
              </li>
              <li className="nav-items">
                <span className="row">
                  <FcGoogle className="nav-icon" />
                  <span className="ml-1">
                    Sign in with Google
                    {/* <span className="google-blue">S</span>
                    <span className="google-yellow">I</span>
                    <span className="google-red">G</span>
                    <span className="google-green">N</span>
                    <span> </span>
                    <span className="google-red">I</span>
                    <span className="google-blue">N</span> */}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
