import React from "react";
import ProjectCard from "../Components/Projects/ProjectCard";

const Projects = () => (
  <>
    { /* Start Portfolio Area */ }
    <div id="projects" className="fix">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-carousel-inner">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Projects</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <ProjectCard stylevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                  <a
                    className="rn-button-style--2 btn-solid"
                    href="https://github.com/shamik05"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    alt="Opens new link to my GitHub"
                  >
                    <span>Find More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    { /* End Portfolio Area */ }
  </>
);
export default Projects;
