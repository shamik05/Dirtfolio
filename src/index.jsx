import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import Header from "./Components/Header";
import "./index.scss";

const App = () => (
  <div className="active-dark">
    <Header homeLink="/" logo="symbol-dark" color="color-black" />
    <LandingPage />
    <About />
    <Services />
    <Projects />
    <Footer />
    <ScrollTop />
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
