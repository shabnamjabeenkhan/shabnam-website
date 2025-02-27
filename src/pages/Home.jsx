import React from "react";
import "../App.css";

// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import cv from "../assets/cv.pdf";


const Home = () => {
  return (
    <div>
      <section id="landing-page">
        
        <header className="header">
          <div className="header__content">
            <h1 className="title">Hey,</h1>
            <h1 className="title orange">I'm Shabnam</h1>
            <p className="header__para">
              I'm a <b class="orange">Fullstack Developer</b> with one year
              experience. Here's a bit more{" "}
              <b className="orange click">about me</b>.
            </p>
          </div>

          {/* <div className="social__list">
            <a
              href="https://www.linkedin.com/in/shabnam-khan-269384234/"
              target="_blank"
              className="social__link click"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/S-J-K123"
              target="_blank"
              className="social__link click"
            >
              <GitHubIcon />
            </a>
            <a href={cv} target="_blank" className="social__link click">
              <PictureAsPdfIcon />
            </a>
          </div> */}
        </header>
      </section>
    </div>
  );
};

export default Home;
