import React from "react";
import { Jumbotron, Badge } from "react-bootstrap";
import "./Banner.scss";

const Banner = () => (
  <>
    <Jumbotron>
      <h1>
        Welcome to my
        <Badge pill variant="info">Dirtfolio!</Badge>
      </h1>
      <p>
        Welcome to the greatest portfolio on the world wide web on Earth with the least amount of redundancy possible!
      </p>
    </Jumbotron>
  </>
);

export default Banner;
