import React from "react";
import "./About.scss";
// import AboutTabs from "../Components/AboutTabs";

const About = ({ title, description }) => (
  <section id="about" className="about__wrapper">
    <div className="container">
      <div className="row row--35">
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
