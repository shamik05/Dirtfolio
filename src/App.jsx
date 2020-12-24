import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default App;
