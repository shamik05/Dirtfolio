import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import repos from "../helpers/constants";

const Projects = () => (
  <Container>
    <CardGroup>
      {repos.map((e) => (
        <Card key={e.id}>
          <Card.Header>{e.name}</Card.Header>
          <Card.Img variant="top" src={e.img} />
          <Card.Body>
            <Card.Text>{e.description}</Card.Text>
          </Card.Body>
          <Card.Footer>{e.tech}</Card.Footer>
        </Card>
      ))}
    </CardGroup>
  </Container>
);

export default Projects;
