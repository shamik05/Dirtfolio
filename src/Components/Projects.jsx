/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from "react";
import {
  CardDeck, Card, Button, ButtonGroup,
} from "react-bootstrap";
import repos from "../helpers/constants";
import "./Projects.scss";
// import bow from "../Assets/bow.gif";
// import bowStill from "../Assets/bowStill.png";
// import bw from "../Assets/bw.gif";
// import bwStill from "../Assets/bwStill.png";
// import lsd from "../Assets/lsd.gif";
// import lsdStill from "../Assets/lsdStill.png";
// import nec from "../Assets/nec.gif";
// import necStill from "../Assets/necStill.png";
// import red from "../Assets/red.gif";
// import redStill from "../Assets/redStill.png";
// import wgw from "../Assets/wgw.gif";
// import wgwStill from "../Assets/wgwStill.png";

const Projects = () => {
  const requestImageFile = require.context("../Assets", true, /\.\..png$/);
  return (
    <CardDeck id="projects" className="projectDeck mx-auto">
      {repos.map((e) => (
        <Card className="projectCard" key={e.id}>
          <Card.Header><h3>{e.name}</h3></Card.Header>
          <Card.Text>{e.description}</Card.Text>

          <Card.Body>
            {/* <Card.Img className="still" src={require(`../Assets/${e.id}.gif`)} /> */}
            <Card.Img className="play" src={requestImageFile(`./${e.id}Still.png`)} />
          </Card.Body>

          <Card.Footer>
            <ButtonGroup size="md" aria-label="Project Links">
              <Button target="_blank" rel="noreferrer" href={e.repo}>Repo</Button>
              <Button target="_blank" rel="noreferrer" href={e.depo}>Deploy</Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
};

export default Projects;
