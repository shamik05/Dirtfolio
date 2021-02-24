/* eslint-disable */
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ServiceList from "../Components/SkillCard";
import {Languages, Frameworks, Libraries, Others } from "../Constants/Skillset";

const Skills = () => (
  <>
    <div id="skills" className="fix">
      <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                <h2 className="title">Skills</h2>
                {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                {/* <Skillset /> */}
              </div>
            </div>
          </div>

          <div className="row creative-service">
            <div className="col-lg-12">
            <Tabs>
            <TabList>
              <Tab>Languages</Tab>
              <Tab>Frameworks</Tab>
              <Tab>Libraries</Tab>
              <Tab>Others</Tab>
            </TabList>

            <TabPanel>
              <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Languages}/>
            </TabPanel>

            <TabPanel>
              <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Frameworks}/>
            </TabPanel>
            
            <TabPanel>
              <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Libraries}/>
            </TabPanel>

            <TabPanel>
              <ServiceList column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" list={Others}/>
            </TabPanel>
          </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Skills;
