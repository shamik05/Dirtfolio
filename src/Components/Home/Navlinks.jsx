/* eslint-disable */
import React from "react";
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  Code, Email, LinkedIn, Work, GitHub,
} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    // float: "right",
    // padding: spacing(2),
  },
}));

const Navlinks = () => {
  const { root } = useStyles();

  return (
    <Grid
      container
      justify="center"
      spacing="5"
      alignItems="center"
    >
      <Grid item spacing="0">
      <Button
        startIcon={<Code />}
        href="#skills"
        color="inherit"
        size="large"
        disableElevation
      >
        Skills
      </Button>
      </Grid>

      <Grid item>
      <Button
        startIcon={<Work />}
        href="#projects"
        color="inherit"
      >
        Projects
      </Button>
      </Grid>

      <Grid item>
      <IconButton
        href="http://www.linkedin.com/in/shamik-h"
        color="inherit"
        target="_blank"
        rel="noopener"
      >
        <LinkedIn />
      </IconButton>
      </Grid>

      <Grid item>
      <IconButton
        href="https://github.com/shamik05"
        color="inherit"
        target="_blank"
        rel="noopener"
      >
        <GitHub />
      </IconButton>
      </Grid>

      <Grid item>
      <Button
        startIcon={<Email />}
        href="mailto:shamikhaldar05@gmail.com"
        color="inherit"
        target="_blank"
        rel="noopener"
        variant="outlined"
      >
        contact me
      </Button>
      </Grid>
    </Grid>
  );
};
export default Navlinks;
