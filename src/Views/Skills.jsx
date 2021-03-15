/* eslint-disable */
import React from "react";
import SkillsTabs from "../Components/Skills/SkillsTabs";
import "./Skills.scss";

const tabs = ["Languages", "Frameworks", "Libraries", "Others"];

const Skills = () => (
  <section id="skills" className="skills__wrapper">
    {/* <div className="service-area creative-service-wrapper"> */}
      <div className="container">
        <h2 className="skills__title text-center">Skills</h2>

        <div className="row no-gutters">
          {/* <div className="col-lg-12"> */}
            <SkillsTabs tabs={tabs} />
          {/* </div> */}
        </div>
      </div>
    {/* </div> */}
  </section>
);

export default Skills;
