import React from "react";
import {
  CardDeck, Card, Button, ButtonGroup,
} from "react-bootstrap";
import repos from "../helpers/constants";
import "./Projects.scss";

const Projects = () => (
  <CardDeck id="projects" className="projectDeck mx-auto">
    {repos.map((e) => (
      <Card className="projectCard" key={e.id}>
        <Card.Header><h3>{e.name}</h3></Card.Header>
        <Card.Text>{e.description}</Card.Text>

        <Card.Body>
          <Card.Img className="still" alt={`${e.name} Still`} src={require(`../Assets/Stills/${e.id}.png`).default} />
          <Card.Img className="play" alt={`${e.name} GIF`} src={require(`../Assets/Gifs/${e.id}.gif`).default} />
        </Card.Body>

        <Card.Footer>
          <ButtonGroup size="lg" aria-label="Project Links">
            <Button target="_blank" rel="noreferrer" href={e.repo}>Repo</Button>
            <Button target="_blank" rel="noreferrer" href={e.depo}>Deploy</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    ))}
  </CardDeck>
);

export default Projects;
