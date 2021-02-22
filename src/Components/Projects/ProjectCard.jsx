/* eslint-disable */
import React from "react";
import { GoRepoForked } from "react-icons/go";
import { MdOpenInNew } from "react-icons/md";
import ProjectList from "../../Constants/ProjectList";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const { column, stylevariation } = props;

  return (
    <>
      {ProjectList.map(({
        name, id, description, repo, depo,
      }) => (
        <div className={`${column}`} key={id}>
          <div className={`portfolio ${stylevariation}`}>
          {/* <div className="ribbon ribbon-top-left"><span>ribbon</span></div> */}
          {/* <div class="corner-ribbon top-left sticky red shadow">Hello</div> */}
            <div className="thumbnail-inner">
              <div className={`thumbnail ${"image-3"}`} />
              {/* <div className={`bg-blr-image ${"image-3"}`} /> */}
            </div>
            <div className="content">
              <div className="inner">
                
                <p>{description}</p>
                <h4><a href="/portfolio-details">{name}</a></h4>
                <div className="portfolio-button">
                  <a className="rn-btn" href={depo}>
                    <GoRepoForked />
                    Read More
                  </a>
                  <a className="rn-btn" href={repo}>
                    <MdOpenInNew />
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default ProjectCard;
