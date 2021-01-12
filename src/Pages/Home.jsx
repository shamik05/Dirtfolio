import React from "react";
import { Jumbotron } from "react-bootstrap";
import Board from "../Components/Board";

const Home = () => (
  <>
    <Jumbotron>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </Jumbotron>
    <Board />
  </>

);

export default Home;
