/* eslint-disable */
import React from "react";

const SkillCard = ({ column, list }) => {

  return (
    <>
      <div className="row">
        {list.map(({ title, icon, description="I throw myself down among the tall grass by the stream as I lie close to the earth." }) => (
          <div className={`${column}`} key={title}>
            {/* <a href="/service-details"> */}
              <div className="service service__style--2">
                <div className="icon">
                  {icon}
                </div>
                <div className="content">
                  <h3 className="title">{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            {/* </a> */}
          </div>
        ))}
      </div>
    </>
  );
};
export default SkillCard;
