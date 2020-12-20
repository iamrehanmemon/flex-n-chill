import React, { useState, useEffect, useContext } from "react";

import { Link, useHistory } from "react-router-dom";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { VscColorMode } from "react-icons/vsc";
import { GoChecklist } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { MdMenu } from "react-icons/md";

// eslint-disable-next-line
import { auth, provider } from "../../firebase/firebase.utils";

import { UserContext } from "../../context/UserContext";

import Sidebar from "../sidebar/sidebar.component";
import Dropdown from "../dropdown/dropdown";

import "./header.styles.scss";

const themeSwitcher = () => {
  const App = document.getElementById("App");
  const Nav = document.querySelector(".navbox");
  const Sidebar = document.querySelector(".sidebar");
  const MobileNav = document.querySelector(".mobile-nav");
  App.classList.toggle("light");
  Nav.classList.toggle("light");
  Sidebar.classList.toggle("light");
  MobileNav.classList.toggle("light");
};

const Header = () => {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const signInWithGoogle = () => {
    provider.setCustomParameters({ prompt: "select_account" });

    auth
      .signInWithPopup(provider)
      .then((result) => setCurrentUser(result.user));
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [query, setQuery] = useState();

  let history = useHistory();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchbar = () => {
    setIsSearchbarOpen(!isSearchbarOpen);
    document.querySelector(".navbox").classList.toggle("visibility");
    document.querySelector(".mobile-nav").classList.toggle("visibility");
  };

  const toggleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (document.querySelector(".navbox")) {
        document
          .querySelector(".navbox")
          .classList.toggle("scrollEffect", window.scrollY > 0);
      }
      if (document.querySelector(".mobile-nav")) {
        document
          .querySelector(".mobile-nav")
          .classList.toggle("scrollEffect", window.scrollY > 0);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const keyPressed = (event) => {
    if (event.keyCode === 13) {
      history.push({
        pathname: "/search",
        state: { query: query }
      });
    }
  };

  return (
    <header>
      <div className="nav">
        {isSearchbarOpen ? (
          <div className="search">
            <div className="search-bar container row">
              <input
                className="search-field"
                type="text"
                placeholder="Type and Hit Enter..."
                onChange={handleChange}
                onKeyDown={keyPressed}
              />
              <span className="close-search">
                <AiOutlineClose
                  className="nav-icon"
                  onClick={toggleSearchbar}
                />
              </span>
            </div>
          </div>
        ) : null}
        <div className="navbox dark">
          <div className="navcontent">
            <ul className="nav">
              <li>
                <Link to="/" className="logo">
                  Flex-N-Chill
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
        </div>

        <div className="mobile-nav dark">
          <Link to="" className="logo">
            Flex-N-Chill
          </Link>
          <div className="row">
            <li className="nav-items">
              <span onClick={toggleSearchbar}>
                <AiOutlineSearch className="nav-icon" />
              </span>
            </li>
            <li className="nav-items" onClick={themeSwitcher}>
              <VscColorMode className="nav-icon" />
            </li>
            <li className="nav-items" onClick={toggleSidebar}>
              <MdMenu className="nav-icon" />
            </li>
          </div>
        </div>
      </div>
      {isDropdownOpen ? <Dropdown /> : null}
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </header>
  );
};

export default Header;
