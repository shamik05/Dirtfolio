/* eslint-disable */
import React from "react";
import {
  Button,
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
    <>
      <Button
        startIcon={<Code />}
        href="#skills"
        color="inherit"
        size="large"
        disableElevation
      >
        Skills
      </Button>

      <Button
        startIcon={<Work />}
        href="#projects"
        color="inherit"
      >
        Projects
      </Button>

      <IconButton
        href="http://www.linkedin.com/in/shamik-h"
        color="inherit"
        target="_blank"
        rel="noopener"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="https://github.com/shamik05"
        color="inherit"
        target="_blank"
        rel="noopener"
      >
        <GitHub />
      </IconButton>
      <Button
        startIcon={<Email />}
        href="mailto:shamikhaldar05@gmail.com"
        color="inherit"
        target="_blank"
        rel="noopener"
      >
        Email
      </Button>
    </>
  );
};
export default Navlinks;
