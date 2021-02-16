/* eslint-disable */
import React from "react";
import {
  AppBar, Toolbar, Button, Typography, makeStyles, useScrollTrigger, Slide, IconButton, List, ListItem, ListItemText, Link
} from "@material-ui/core";
import { Home as HomeIcon, Menu as MenuIcon } from "@material-ui/icons";
// import MenuIcon from "@material-ui/icons/Menu";
// import { MenuIcon } from "@material-ui/icons";
// import Header from "../Components/Home/Header";

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

const SideDrawer = () => {
  return (
    <>
    <IconButton edge="start" aria-label="menu">
      <MenuIcon />
    </IconButton>
    </>
  )
};

const Home = (props) => {
  const { toolbar, ul, a } = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
      <AppBar position="static">
        <Toolbar className={toolbar}>
          {/* <Container> */}
        <IconButton edge="start" color="inherit" aria-label="home">
          <HomeIcon fontSize="large" />
        </IconButton>
        {/* </Container> */}

          <List component="ul" aria-labelledby="main navigation" className={ul}>
          {navLinks.map(({ title, path }) => (
          <ListItem>
            <Link href={path} component="a" variant="button" color="inherit">
              {title}
            </Link>
          </ListItem>
                  ))}
          </List>
          {/* <SideDrawer /> */}

          <Button color="inherit">HIRE ME</Button>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Home;
