import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Project from "./Pages/Projects";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Project />
      </Route>
    </Switch>
  </div>
);

export default App;
