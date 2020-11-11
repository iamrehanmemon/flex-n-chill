import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="single_column container">
      <div className="footer_content">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="The Movie Database (TMDb)"
          padding="20px"
          width="130"
          height="94"
        />
        <Link className="footer-link rounded" href="#">
          JOIN THE COMMUNITY
        </Link>
      </div>
      <div className="footer_content vl">
        <Link className="footer-link" href="#">
          THE BASICS
        </Link>
        <Link className="footer-link" href="#">
          Contact Us
        </Link>
        <Link className="footer-link" href="#">
          Careers
        </Link>
      </div>
      <div className="footer_content vl">
        <Link className="footer-link" href="#">
          GET INVOLVED
        </Link>
        <Link className="footer-link" href="#">
          Add New TV Show
        </Link>
        <Link className="footer-link" href="#">
          Add New Movie
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
