/* eslint-disable */
import React from "react";
import AboutTabs from "../Components/AboutTabs";

const About = () => {
  const title = "About Me";
  const description = "Full stack web developer with background in computer engineering rediscovering my love for programming. Recently graduated from Carleton University with a certificate in full stack development, my goal is to continue improving and expanding my knowledge. Having learned skills such as JavaScript, HTML, CSS, React, Node, Express, MySQL etc. my projects showcase my strength as a coder and the willingness to push my boundaries. My aim remains to continue learning the world of web development while leveraging my productivity and skills to be considered a strong asset to any organization.";

  return (
    <>
      {/* Start About Area */}
      <div id="about" className="fix">
        {/* <div className="about-area ptb--120  bg_color--1"> */}
        <div className="about-area ptb--120">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src={require("../Assets/images/about/about-4.jpg").default} alt="About Images" />
                    {/* <img src={require("../undraw_about_me_wa29.svg").default} alt="About Me Image" /> */}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      {/* <AboutTabs tabStyle="tab-style--1" /> */}
                      {/* <img src={require("../undraw_about_me_wa29.svg").default} alt="About Me Image" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}
    </>
  );
};

export default About;
