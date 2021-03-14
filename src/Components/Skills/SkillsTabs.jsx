import React from "react";
import {
  Tab, TabList, Tabs,
} from "react-tabs";
import "./SkillsTabs.scss";

const SkillsTabs = ({ tabs }) => (
  <Tabs className="skills__tabs__wrapper">
    <TabList className="skills__tabs">
      {tabs.map((tab) => (
        <Tab key={tab}>{tab}</Tab>
      ))}
    </TabList>
  </Tabs>
);

export default SkillsTabs;
