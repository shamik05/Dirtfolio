/* eslint-disable */
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Skillset = () => {
  return (
    <>
    <Tabs>
      <TabList>
        <Tab>Languages</Tab>
        <Tab>Frameworks</Tab>
        <Tab>Libraries</Tab>
        <Tab>Others</Tab>
      </TabList>

      <TabPanel>
        Languages
      </TabPanel>
    </Tabs>
    </>
  )
};

export default Skillset;
