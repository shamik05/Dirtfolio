/* eslint-disable */
import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ list }) => {
  return (  
    list.map(({ title, icon, description }) => (
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left SkillCard__wrapper" key={title}>
        {/* <a href="/service-details"> */}
          <div className="SkillCard service">
            <div className="SkillCard__icon">
              {icon}
            </div>
            <div className="SkillCard__content">
              <h3 className="SkillCard__content__title">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        {/* </a> */}
      </div>
    ))
      
  );
};
export default SkillCard;
