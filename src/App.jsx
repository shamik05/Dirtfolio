import React from "react";
// import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

const App = () => (
  <>
    {/* <Switch> */}
    {/* <Route path="/skills"> */}
    <Home />
    <Typography variant="h2" component="h2" gutterBottom align="center">
      SHAMIK HALDAR
    </Typography>
    <Typography variant="p" component="p" gutterBottom align="center" paragraph>
      Full Stack Developer
    </Typography>
    <Skills />
    <Projects />
    {/* </Route> */}
    {/* <Route path="/projects"> */}
    {/* </Route> */}
    {/* <Route exact path="/"> */}
    {/* </Route> */}
    {/* // </Switch> */}
  </>
);

export default App;
