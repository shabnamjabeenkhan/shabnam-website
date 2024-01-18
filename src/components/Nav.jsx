import React from "react";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <figure>
          <img className="logo" src={logoImage} />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#"
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black"
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <Link to="/Projects">
              <a
                href="/projects"
                className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black"
              >
                Projects
              </a>
            </Link>
          </li>
          <li className="nav__link click">
            <a
              href="#"
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
