import React from "react";
// import PropTypes from "prop-types";
import { useScrollTrigger, Slide } from "@material-ui/core";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
    // threshold: 0,
    // target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
};

export default HideOnScroll;
