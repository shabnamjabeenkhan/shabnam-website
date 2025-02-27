import React from "react";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      {/* <nav>
        <ul>
          <li><img className="logo" src={logoImage} alt="" /></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav> */}
      <nav>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link to="/" aria-label="Shabnam Khan Logo">
              <img className="logo" src={logoImage} alt="Shabnam Khan Website" />
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/"
              title="Shabnam Khan Portfolio Website Home Page"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              aria-label="About Shabnam Khan"
            >
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/About"
              title="Shabnam Khan Portfolio Website Home Page"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              aria-label="About Shabnam Khan"
            >
              About
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/Projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              aria-label="Shabnam Khan Projects"
            >
              Projects
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/contact"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              title="Contact Shabnam Khan Via Email Form"
              aria-label="Reach out to Shabnam khan"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
