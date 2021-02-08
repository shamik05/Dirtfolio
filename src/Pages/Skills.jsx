import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Sunburst from "../Components/Skills/Chart";

const useStyles = makeStyles(() => ({
  section: {
    backgroundColor: "rgb(213 228 255)",
    margin: 0,
  },
}));

const Skills = () => {
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
        gutterBottom={false}
        id="Skills"
      >
        SKILLS
      </Typography>
      <Sunburst />
    </Container>
  );
};

export default Skills;
