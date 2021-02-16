/* eslint-disable */
import React from "react";
import {
  AppBar, Link, makeStyles, Toolbar, Typography, Grid
} from "@material-ui/core";
import HideOnscroll from "./Scroll";
import Navlinks from "./Navlinks";

const useStyles = makeStyles(({ spacing }) => ({
  appBar: {
    padding: spacing(2),
  },
  toolBar: {
    paddingLeft: spacing(5),
    paddingRight: spacing(5),
    justifyContent: "space-between",
    // padding: spacing(2)
  },
  toolBarNav: {
    justifyContent: "inherit",
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
  const { circle, toolBar, appBar, toolBarNav } = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  return (
    <HideOnscroll {...props}>
      <AppBar
        className={appBar}
        color="primary"
      >
        <Toolbar className={toolBar}>
          <Grid container className={toolBarNav} alignItems="center">
            <Grid item s={2}>
              <Typography>
                <Link href="/" color="inherit">
                  Portfolio
                </Link>
              </Typography>
            </Grid>

            <Grid item s={10}>
              <Navlinks />
            </Grid>
          </Grid>
        </Toolbar>
        {/* <Toolbar /> */}
      </AppBar>
    </HideOnscroll>
  );
};
export default Header;
