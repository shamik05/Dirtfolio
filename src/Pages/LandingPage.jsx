import React from "react";
import TextLoop from "react-text-loop";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my World",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const LandingPage = () => (
  <>
    {/* Start Slider Area   */}
    <div id="home" className="fix">
      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {SlideList.map((value) => (
          <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={value}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className="title">
                      Hi, I’m Shamik Haldar
                      <br />
                      <TextLoop>
                        <span> Full-Stack Developer.</span>
                        <span> Learner</span>
                        <span> Content Writter.</span>
                      </TextLoop>
                      {" "}
                    </h1>
                    <h2>from Canada.</h2>
                    {value.description ? <p className="description">{value.description}</p> : ""}
                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>
    </div>
    {/* End Slider Area   */}
  </>

);

export default LandingPage;
