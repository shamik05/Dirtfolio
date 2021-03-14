import React from "react";
import "./About.scss";
// import AboutTabs from "../Components/AboutTabs";

const title = "About Me";
const description = "Full stack web developer with background in computer engineering rediscovering my love for programming. Recently graduated from Carleton University with a certificate in full stack development, my goal is to continue improving and expanding my knowledge. Having learned skills such as JavaScript, HTML, CSS, React, Node, Express, MySQL etc. my projects showcase my strength as a coder and the willingness to push my boundaries. My aim remains to continue learning the world of web development while leveraging my productivity and skills to be considered a strong asset to any organization.";

const About = () => (
  <section id="about" className="about__wrapper">
    <div className="container">
      <div className="row row--35 align-items-center">
        <div className="col-lg-5">
          <img className="w-100 about__thumbnail" src={require("../Assets/images/about/about-4.jpg").default} alt="About Images" />
        </div>

        <div className="col-lg-7">
          <div className="about__content">
            <h2 className="about__content__title">{title}</h2>
            <p className="about__content__description">{description}</p>
          </div>
          {/* <div className="about__content__tabs row"> */}
          {/* <AboutTabs tabStyle="tab-style--1" /> */}
          {/* <img src={require("../undraw_about_me_wa29.svg").default} alt="About Me Image" /> */}
          {/* </div> */}
        </div>
      </div>
    </div>

  </section>
);

export default About;
