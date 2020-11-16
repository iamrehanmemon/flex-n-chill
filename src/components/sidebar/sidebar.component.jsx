import React, { useEffect } from "react";
import "./sidebar.styles.scss";

const Sidebar = ({ isSidebarOpen }) => {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    isSidebarOpen
      ? sidebar.classList.add("active-sidebar")
      : sidebar.classList.remove("active-sidebar");
  }, [isSidebarOpen]);

  return (
    <div className="sidebar dark">
      <h2>Library</h2>
      <div className="sidebar-content ">
        <div className="sidebar-item">
          <img
            className="sidebar-image"
            src="https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg"
            alt="cover"
          />
          <div className="sidebar-description">
            <h3>Daylight</h3>
            <h4>Aiguille</h4>
          </div>
        </div>
        <div className="sidebar-item">
          <img
            className="sidebar-image"
            src="https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg"
            alt="cover"
          />
          <div className="sidebar-description">
            <h3>Daylight</h3>
            <h4>Aiguille</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
