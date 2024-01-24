import React from "react";
import Nav from "../components/Nav";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EcommerceImage from "../assets/Ecommerce.PNG";
import MoviesImage from "../assets/movies.png";
import TwitterImage from "../assets/twitter.png";
import EmailImage from "../assets/email.PNG";
import SummaristImage from "../assets/summarist.png";
import { projectsData } from "../projectsData";
import NFTImage from "../assets/NFT.png"

const Projects = () => {
  return (
    <div>
      <section id="landing-page">
        
        <section id="projects">
          <div className="container">
            <div className="row">
              <h1 className="section__title">
                Here are some of my <span className="orange">projects</span>
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
                {projectsData.map((project) => (
                  <li className="project__2" key={project.id}>
                    <div className="project__wrapper">
                      {/* {project.image} */}

                      <img
                        className="project__img"
                        src={project.image}
                        alt={project.name}
                      />
                      <div className="project__wrapper--bg"></div>
                      <div className="project__description">
                        <h3 className="project__description--title">
                          {project.name}
                        </h3>
                        <h4 className="project__description--sub-title">
                          {project.technologies.join(", ")}
                        </h4>
                        <p className="project__description--para">
                          {project.description}
                        </p>
                        <div className="project__description--links">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            className="project__description--link"
                          >
                            <LinkIcon />
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            className="project__description--link"
                          >
                            <GitHubIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Projects;
