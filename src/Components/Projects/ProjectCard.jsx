/* eslint-disable react/prop-types */
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
              <div className="thumbnail" style={{ backgroundImage: `url(${require(`../../Assets/Stills/${id}.png")`).default}` }} />
            </div>
            <div className="content">
              <div className="inner">
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="portfolio-button">
                  <a
                    className="rn-btn"
                    href={depo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    alt="Opens new link to the project repository"
                    style={{ margin: "20px" }}
                  >
                    <GoRepoForked />
                    Read More
                  </a>
                  <a
                    className="rn-btn"
                    href={repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="This is an external link (opens in a new tab)"
                    alt="Opens new link to deployed site"
                  >
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
