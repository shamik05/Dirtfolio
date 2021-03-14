/* eslint-disable */
import React from "react";
import ServiceList from "../Components/SkillCard";
import SkillsTabs from "../Components/Skills/SkillsTabs";
import {
  Languages, Frameworks, Libraries, Others,
} from "../Constants/Skillset";
import "./Skills.scss";

const tabs = ["Languages", "Frameworks", "Libraries", "Others"];

const Skills = () => (
  <section id="skills" className="skills__wrapper">
    {/* <div className="service-area creative-service-wrapper"> */}
      <div className="container">
        <h2 className="skills__title text-center">Skills</h2>

        <div className="row">
          <div className="col-lg-12">
            <SkillsTabs tabs={tabs} />
            {/* <Tabs className="skills__tabs__wrapper">
              <TabList className="skills__tabs">
                <Tab>Languages</Tab>
                <Tab>Frameworks</Tab>
                <Tab>Libraries</Tab>
                <Tab>Others</Tab>
              </TabList>
              <TabPanel>
                <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Languages} />
              </TabPanel>

              <TabPanel>
                <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Frameworks} />
              </TabPanel>

              <TabPanel>
                <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Libraries} />
              </TabPanel>

              <TabPanel>
                <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Others} />
              </TabPanel>

            </Tabs> */}
          </div>
        </div>
      </div>
    {/* </div> */}
  </section>
);

export default Skills;
