import React from "react";
import Nav from "../components/Nav";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import NFTImage from "../assets/NFT.png";
import Ecommerce from "../assets/Ecommerce.PNG";
import Movies from "../assets/movies.png";
import Twitter from "../assets/twitter.png";
import Email from "../assets/email.PNG";
import Summarist from "../assets/summarist.png";

const Projects = () => {
  return (
    <div>
      <section id="landing-page">
        <Nav />
        <section id="projects">
          <div className="container">
            <div className="row">
              <h1 className="section__title">
                Here are some of my <span class="orange">projects</span>
              </h1>
              <ul
                className="project__list"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="True"
                data-aos-anchor-placement="top-center"
              >
                <li className="project">
                  <div className="project__wrapper">
                    <img src={NFTImage} className="project__img" alt="" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">NFT</h3>
                      <h4 className="project__description--sub-title">
                        Html, CSS, JavaScript, ReactJS, Skeleton Loading State,
                        React Routing.
                      </h4>
                      <p className="project__description--para">
                        Transformed a completely static HTML, CSS, Javascript
                        and React single page application into an interactive
                        user interface using animations, transitions, and
                        carousels.
                      </p>
                      <div className="project__description--links">
                        <a
                          href="https://shabnam-internship-7gkfpxpsb-s-j-k123.vercel.app/"
                          target="_blank"
                          className="project__description--link"
                        >
                          <LinkIcon />
                        </a>
                        <a
                          href="https://github.com/S-J-K123"
                          target="_blank"
                          className="project__description--link"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project__2">
                  <div className="project__wrapper">
                    <img src={Ecommerce} className="project__img" alt="" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Ecommerce Website
                      </h3>
                      <h4 className="project__description--sub-title">
                        Html, CSS, JavaScript, ReactJS, Skeleton Loading State,
                        React Routing.
                      </h4>
                      <p className="project__description--para">
                        Designed and launched a user-friendly platform allowing
                        readers to quickly grasp core concepts of extensive
                        literary works with AI, achieving an average 95%
                        satisfaction rate based on feedback on accuracy and
                        readability.
                      </p>
                      <div className="project__description--links">
                        <a
                          href="https://library-react-beige.vercel.app/"
                          target="_blank"
                          className="project__description--link"
                        >
                          <LinkIcon />
                        </a>
                        <a
                          href="https://github.com/S-J-K123"
                          target="_blank"
                          className="project__description--link"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project__2">
                  <div className="project__wrapper">
                    <img src={Movies} className="project__img" alt="" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Movies Website
                      </h3>
                      <h4 className="project__description--sub-title">
                        Html, CSS, JavaScript, ReactJS, Skeleton Loading State,
                        React Routing.
                      </h4>
                      <p className="project__description--para">
                        I created a fully responsive website using HTML, CSS,
                        JavaScript and React with dynamically fetched data. It
                        includes loading states, dynamic filtering, dynamic
                        routing.
                      </p>
                      <div className="project__description--links">
                        <a
                          href="https://week-6-project.vercel.app/"
                          target="_blank"
                          className="project__description--link"
                        >
                          <LinkIcon />
                        </a>
                        <a
                          href="https://github.com/S-J-K123"
                          target="_blank"
                          className="project__description--link"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="project__2">
                  <div className="project__wrapper">
                    <img src={Summarist} className="project__img" alt="" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">Summarist</h3>
                      <h4 className="project__description--sub-title">
                        Html, CSS, JavaScript, Next.JS, Redux, Firebase.
                      </h4>
                      <p className="project__description--para">
                        Summarist is a modern web app with HTML, CSS,
                        JavaScript, and Node.js. Using Redux and Firebase for
                        dynamic user experiences.
                      </p>
                      <div className="project__description--links">
                        <a
                          href="https://summarist-taupe.vercel.app/"
                          target="_blank"
                          className="project__description--link"
                        >
                          <LinkIcon />
                        </a>
                        <a
                          href="https://github.com/S-J-K123"
                          target="_blank"
                          className="project__description--link"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="project__2">
                  <div className="project__wrapper">
                    <img src={Twitter} className="project__img" alt="" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Twitter Clone
                      </h3>
                      <h4 className="project__description--sub-title">
                        Html, CSS, JavaScript, Redux, Firebase, NextJS.
                      </h4>
                      <p className="project__description--para">
                        A feature-rich social media platform built using
                        Node.js, HTML, TypeScript, and npm. With React Icons,
                        Redux, firebase, and Tailwind CSS, our platform offers a
                        visually appealing and intuitive user experience.
                      </p>
                      <div className="project__description--links">
                        <a
                          href="https://week-6-project.vercel.app/"
                          target="_blank"
                          className="project__description--link"
                        >
                          <LinkIcon />
                        </a>
                        <a
                          href="https://github.com/S-J-K123"
                          target="_blank"
                          className="project__description--link"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="project__2">
                  <div className="project__wrapper">
                    <img src={Email} class="project__img" alt="" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Email Developing
                      </h3>
                      <h4 className="project__description--sub-title">
                        Html, CSS
                      </h4>
                      <p className="project__description--para">
                        I have created emails from scratch that are fully
                        responsive using HTML and CSS, including projects done
                        for clients.
                      </p>
                      <div className="project__description--links">
                        <a
                          href="https://shabnamjabeen1998.wixsite.com/my-site"
                          target="_blank"
                          className="project__description--link"
                        >
                          <LinkIcon />
                        </a>
                        <a
                          href="https://github.com/S-J-K123"
                          target="_blank"
                          className="project__description--link"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Projects;
