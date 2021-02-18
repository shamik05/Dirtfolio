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

const BlogContent = [
  {
    images: "01",
    title: " Getting tickets to the big show",
    category: "Development",
  },
  {
    images: "02",
    title: "A big ticket gone to be an interesting ",
    category: "Management",
  },

  {
    images: "03",
    title: "The Home of the Future Could Bebes",
    category: "Design",
  },
  {
    images: "04",
    title: " Getting tickets to the big show",
    category: "Development",
  },
  {
    images: "01",
    title: "A big ticket gone to be an interesting ",
    category: "Management",
  },
  {
    images: "02",
    title: "The Home of the Future Could Bebes",
    category: "Design",
  },
];

const LandingPage = () => {
  const title = "About Me";
  const description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href=\"#\">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,";
  const PostList = BlogContent.slice(0, 3);
  console.log(PostList);

  return (
    <div className="active-dark">
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
                        Hi, I’m Jone Doe
                        <br />
                        <TextLoop>
                          <span> JS Developer.</span>
                          <span> UI/UX Designer.</span>
                          <span> Content Writter.</span>
                        </TextLoop>
                        {" "}
                      </h1>
                      <h2>based in USA.</h2>
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

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      {/* <TabTwo tabStyle="tab-style--1" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}
    </div>

  );
};

export default LandingPage;
