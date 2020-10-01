import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSun } from "react-icons/fa";

import "./header.styles.scss";

const themeSwitcher = () => {
  const App = document.getElementById("App");
  const Nav = document.getElementById("Nav");
  App.classList.toggle("light");
  Nav.classList.toggle("light");
};

const Header = () => {
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
        <div className="navbox">
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
                <FiPlusCircle className="nav-icon" />
              </li>

              <li className="nav-items" onClick={themeSwitcher}>
                <FaSun className="nav-icon" />
              </li>

              <li>
                <Link className="nav-items">Login</Link>
              </li>
              <li>
                <Link className="nav-items">Join the Community</Link>
              </li>
              <li className="nav-items">
                <AiOutlineSearch className="nav-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
