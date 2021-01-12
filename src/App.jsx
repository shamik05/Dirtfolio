import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => (
  <div className="App">
    <Switch>
      <Header />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default App;
