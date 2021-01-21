import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>

  </>
);

export default App;
