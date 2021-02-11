/* eslint-disable */
import React from "react";
import {
  AppBar, Link, makeStyles, Toolbar, Typography,
} from "@material-ui/core";
import HideOnscroll from "./Scroll";
import Navlinks from "./Navlinks";

const useStyles = makeStyles(({ spacing }) => ({
  appBar: {
    // padding: spacing(2),
  },
  toolBar: {
    paddingLeft: spacing(6),
    paddingRight: spacing(6),
  },
  circleContainer: {
    display: "flex",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    // height: "50%",
    height: 307,
    // paddingTop: "100%",
    width: 307,
    borderRadius: "50%",
    // border: "3px solid white",
    // left: "45%",
    // marginLeft: "-55px",
    bottom: "-70%",
    backgroundColor: "#3f51b5",
  },
}));

const Header = (props) => {
  const { circle, toolBar, appBar } = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  return (
    <HideOnscroll {...props}>
      <AppBar
        color="primary"
      >
        <Toolbar>
          <Typography>
            <Link href="/" color="textSecondary">
              Portfolio
            </Link>
          </Typography>
          {/* <Navlinks /> */}
        </Toolbar>
        {/* <Toolbar /> */}
      </AppBar>
    </HideOnscroll>
  );
};
export default Header;
