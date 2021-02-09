import React from "react";
import PropTypes from "prop-types";
import { useScrollTrigger, Slide } from "@material-ui/core";

function HideOnscroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
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
}

HideOnscroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default HideOnscroll;
