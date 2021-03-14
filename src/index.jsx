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

const App = () => (
  <div className="active-dark">
    {/* <Header homeLink="/" logo="symbol-dark" color="color-black" /> */}
    {/* <LandingPage /> */}
    {/* <Parallax bgImage={image1} bgImageAlt="Background Image" strength={500} > */}
      <About />
     
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* </Parallax> */}
      {/* <Footer /> */}
      {/* <ScrollTop /> */}

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
