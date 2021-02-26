/* eslint-disable */
import React from "react";
import { GoRepoForked } from "react-icons/go";
import { MdOpenInNew } from "react-icons/md";
import ProjectList from "../../Constants/ProjectList";
import "./ProjectCard.scss";
import "../../Assets/Stills/bow.png";
import { useState } from "react";

const ProjectCard = (props) => {
  const { column, stylevariation } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      {ProjectList.map(({
        name, id, description, repo, depo,
      }) => (
        <div className={`${column}`} key={id} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          <div className={`portfolio ${stylevariation}`}>
            <div className="thumbnail-inner">
              <div className="thumbnail" style={{ 
                backgroundImage: `url(${require(`../../Assets/Stills/${id}.png`).default}` }} />
              {/* {show ? <div className="thumbnail" style={{ backgroundImage: `url(${require(`../../Assets/Gifs/${id}.gif`).default}` }} /> :
              <div className="thumbnail" style={{ backgroundImage: `url(${require(`../../Assets/Stills/${id}.png`).default}` }} />
              } */}
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
