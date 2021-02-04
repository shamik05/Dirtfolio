import React from "react";
import {
  CardDeck, Card, Button, ButtonGroup, Container, Row,
} from "react-bootstrap";
import repos from "../helpers/constants";
import "./Projects.scss";

const Projects = () => {
  console.log(repos);

  return (
    <Container className="projectContainer" fluid>
      <Row className="d-flex justify-content-center" id="projects">
        <h1 className="display-3 text-decoration-underline">PROJECTS</h1>
      </Row>

      <Row>
        <CardDeck className="projectDeck mx-auto">
          {repos.map((e) => (
            <Card className="projectCard shadow-lg" key={e.id}>
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
      </Row>
    </Container>
  );
};

export default Projects;
