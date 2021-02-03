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
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </Jumbotron>
  </>
);

export default Banner;
