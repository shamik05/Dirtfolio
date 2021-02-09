import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Code } from "@material-ui/icons";
import HideOnscroll from "./Scroll";

const Header = (props) => {
  console.log(React);

  return (
    <HideOnscroll {...props}>
      <AppBar
        color="primary"
      // position="sticky"
      >
        <Toolbar
          // disableGutters="true"
        // variant="dense"
          component="header"
        >
          Header
          <Code />
        </Toolbar>
        {/* <Toolbar /> */}
      </AppBar>
    </HideOnscroll>
  );
};

export default Header;
