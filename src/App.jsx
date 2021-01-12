import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
