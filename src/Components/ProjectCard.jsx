/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

const ProjectCard = (props) => {
  const { column, styevariation } = props;
  const list = PortfolioListContent.slice(0, props.item);
  return (
    <>
      {list.map((value) => (
        <div className={`${column}`} key={value}>
          <div className={`portfolio ${styevariation}`}>
            <div className="thumbnail-inner">
              <div className={`thumbnail ${value.image}`} />
              <div className={`bg-blr-image ${value.image}`} />
            </div>
            <div className="content">
              <div className="inner">
                <p>{value.category}</p>
                <h4><a href="/portfolio-details">{value.title}</a></h4>
                <div className="portfolio-button">
                  <a className="rn-btn" href="/portfolio-details">View Details</a>
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
