/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
// import { Parallax } from "react-parallax";
import LandingPage from "./Views/LandingPage";
import About from "./Views/About";
import Skills from "./Views/Skills";
import Projects from "./Views/Projects";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import Header from "./Components/Header/Header";
import "./index.scss";

const title = "About Me";
const description = "Full stack web developer with background in computer engineering rediscovering my love for programming. Recently graduated from Carleton University with a certificate in full stack development, my goal is to continue improving and expanding my knowledge. Having learned skills such as JavaScript, HTML, CSS, React, Node, Express, MySQL etc. my projects showcase my strength as a coder and the willingness to push my boundaries. My aim remains to continue learning the world of web development while leveraging my productivity and skills to be considered a strong asset to any organization.";

const App = () => (
  <div className="active-dark">
  <>
    {/* <Header homeLink="/" logo="symbol-dark" color="color-black" /> */}
    {/* <LandingPage /> */}
    {/* <Parallax bgImage={image1} bgImageAlt="Background Image" strength={500} > */}
    <About title={title} description={description} />
    <Skills />
      {/* <Projects /> */}
      {/* </Parallax> */}
      {/* <Footer /> */}
      {/* <ScrollTop /> */}
  </>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
