import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import "./index.scss";

const App = () => (
  <>
    <LandingPage />
    <About />
  </>
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
