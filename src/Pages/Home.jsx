/* eslint-disable */
import React from "react";
import {
  AppBar, Toolbar, Button, makeStyles, useScrollTrigger, Slide, IconButton, List, ListItem, Link, Hidden
} from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";
import SideDrawer from "../Components/Home/SideDrawer";

const navLinks = [
  { title: "about", path: "/about-us" },
  { title: "skills", path: "/product" },
  { title: "projects", path: "/blog" },
  { title: "contact", path: "/contact" },
]

const HideOnScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
};

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: "space-around"
  },
  ul: {
    display: "flex",
  },
  a: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white"
  }
}));

const Home = (props) => {
  const { toolbar, ul, a } = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
      <AppBar position="static">
        <Toolbar className={toolbar}>
        <IconButton edge="start" color="inherit" aria-label="home">
          <HomeIcon fontSize="large" />
        </IconButton>

        <Hidden mdDown>
          <List component="ul" aria-labelledby="main navigation" className={ul}>
            {navLinks.map(({ title, path }) => (
            <ListItem key={title}>
              <Link href={path} component="a" variant="button" color="inherit">
                {title}
              </Link>
            </ListItem>
            ))}
          </List>
        </Hidden>

        <Hidden mdUp>
        <SideDrawer navLinks={navLinks}/>
        </Hidden>

        <Button color="inherit">HIRE ME</Button>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Home;
