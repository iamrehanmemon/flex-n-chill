import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";

import Sidebar from "../sidebar/sidebar.component";

const themeSwitcher = () => {
  const MobileNav = document.querySelector(".mobile-nav");
  MobileNav.classList.toggle("light");
};

const MobileNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  const toggleSearchbar = () => {
    setIsSearchbarOpen(!isSearchbarOpen);
    document.querySelector(".navbox").classList.toggle("visibility");
    document.querySelector(".mobile-nav").classList.toggle("visibility");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mobile-nav dark">
      <Link to="" className="logo">
        Popdog
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
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default MobileNav;
