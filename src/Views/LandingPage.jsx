import React from "react";
import TextLoop from "react-text-loop";

const SlideList = {
  textPosition: "text-left",
  category: "<H1>",
  description: "</H1>",
  buttonText: "buttonText",
  buttonLink: "buttonLink",
};

const LandingPage = () => (
  <>
    {/* Start Slider Area   */}
    <div id="home" className="fix">
      <div className="slider-wrapper">
        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`inner ${SlideList.textPosition}`}>
                  {SlideList.category ? <span>{SlideList.category}</span> : ""}
                  <h1 className="title">
                    Hi, I’m Shamik Haldar
                    <br />
                    <TextLoop>
                      <span> Full-Stack Developer.</span>
                      <span> Javascript Programmer</span>
                      <span> Learner</span>
                    </TextLoop>
                    {" "}
                  </h1>
                  <h2>from Canada.</h2>
                  {SlideList.description ? <p className="description">{SlideList.description}</p> : ""}
                  {SlideList.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${SlideList.buttonLink}`}>{SlideList.buttonText}</a></div> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Slider Area   */}
  </>

);

export default LandingPage;
