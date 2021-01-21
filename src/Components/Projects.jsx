import React from "react";
import {
  Container, CardDeck, Card, Badge,
} from "react-bootstrap";
import repos from "../helpers/constants";

const Projects = () => (
  <Container>
    <CardDeck>
      {repos.map((e) => (
        <Card key={e.id}>
          <Card.Header>{e.name}</Card.Header>
          {/* <Card.Img variant="top" src={e.img} /> */}

          <Card.Body>
            <Card.Text>{e.description}</Card.Text>
          </Card.Body>

          <Card.Footer>
            {e.tech.map((t) => (
              <Badge pill variant="light">{t}</Badge>
            ))}
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  </Container>
);

export default Projects;
