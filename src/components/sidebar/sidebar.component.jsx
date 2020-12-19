import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { UserContext } from "../../context/UserContext";

// eslint-disable-next-line
import { auth, provider } from "../../firebase/firebase.utils";

import "./sidebar.styles.scss";

const Sidebar = ({ isSidebarOpen }) => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const signInWithGoogle = () => {
    provider.setCustomParameters({ prompt: "select_account" });

    auth
      .signInWithPopup(provider)
      .then((result) => setCurrentUser(result.user.displayName));
  };

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    isSidebarOpen
      ? sidebar.classList.add("active-sidebar")
      : sidebar.classList.remove("active-sidebar");
  }, [isSidebarOpen]);

  return (
    <div className="sidebar dark">
      <h2>Flex-N-Chill</h2>
      {currentUser && <h3> Hello {currentUser.displayName}</h3>}
      <div className="sidebar-content ">
        <div className="sidebar-item">
          <div className="sidebar-description">
            <li className="sidebar-link">
              <Link to="/movies" className="nav-items">
                Movies
              </Link>
            </li>
            <li className="sidebar-link">
              <Link to="/tv-shows" className="nav-items">
                TV Shows
              </Link>
            </li>
            <li className="sidebar-link">
              <Link to="/watchlist" className="nav-items">
                Watchlist
              </Link>
            </li>
            <li className="nav-items sidebar-link" onClick={signInWithGoogle}>
              <span className="row">
                <span className="sidebar-link">Sign in with</span>
                <FcGoogle className="nav-icon" />
              </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
