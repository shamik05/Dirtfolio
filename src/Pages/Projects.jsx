import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Project from "../Components/Projects/Project";

const useStyles = makeStyles(() => ({
  section: {
    backgroundColor: "rgb(245, 229, 229)",
    margin: 0,
  },
}));

const Projects = () => {
  const { section } = useStyles();

  return (
    <Container
      component="section"
      className={section}
      disableGutters
      maxWidth="xl"
    >
      <Typography
        align="center"
        component="h2"
        variant="h2"
        gutterBottom
        id="Projects"
      >
        PROJECTS
      </Typography>

      <Project />
    </Container>
  );
};

export default Projects;
