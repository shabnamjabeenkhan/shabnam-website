import React from "react";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <figure>
          <img className="logo" src={logoImage} />
        </figure>
        <ul className="nav__link--list">

          <li className="nav__link">
            <a
              href="/"
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black"
            >
              About
            </a>
          </li>

          <li className="nav__link">
        
              <a
                href="/Projects"
                className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black"
              >
                Projects
              </a>
        
          </li>
          <li className="nav__link click">
            <a
              href="/Contact"
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black"
            >
              Contact
            </a>
          </li>
          {/* <li className="nav__link click">
              <a
                href="#"
                className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black"
              >
                <i className="fas fa-adjust"></i>
              </a>
            </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
