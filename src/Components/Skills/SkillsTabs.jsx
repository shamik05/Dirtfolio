/* eslint-disable */
import React from "react";
import {
  Tab, TabList, Tabs, TabPanel,
} from "react-tabs";
import SkillCard from "./SkillCard";
import { Languages } from "../../Constants/Skillset";
import "./SkillsTabs.scss";

const SkillsTabs = ({ tabs }) => (
  <Tabs className="skills__tabs__wrapper">
    <TabList className="skills__tablist">
      {tabs.map((tab) => (
        <Tab key={tab}><h3>{tab}</h3></Tab>
      ))}
    </TabList>

    <TabPanel>
      <SkillCard list={Languages} />
    </TabPanel>
  </Tabs>
);

export default SkillsTabs;
