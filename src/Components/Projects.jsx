import React from "react";
import {
  CardDeck, Card, Button, ButtonGroup,
} from "react-bootstrap";
import repos from "../helpers/constants";
import "./Projects.scss";

const Projects = () => (
  <CardDeck className="projectDeck mx-auto">
    {repos.map((e) => (
      <Card className="projectCard" key={e.id}>
        <Card.Header><h3>{e.name}</h3></Card.Header>
        {/* <Card.Img variant="top" src={e.img} /> */}

        <Card.Body>
          <Card.Text>{e.description}</Card.Text>
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

export default Projects;
