/* eslint-disable */
import React from "react";
import {
  AppBar, Toolbar, Link, List, ListItem,
} from "@material-ui/core";

const navs = ["about", "skills", "projects", "contact"];

// const useStyles = makeStyles((theme) => ({
//   item: {
//     color: "white"
//   }
// }));

const Header = () => {
  // const { item } = useStyles();
  // console.log(item);
  return (
  <AppBar position="sticky">
    <Toolbar component="header">
      News

      <List component="ul">
        {navs.map((element) => (
          <ListItem>
            <Link href="#about" component="a" variant="button" >
              {element}
            </Link>
          </ListItem>
        ))}
      </List>

    </Toolbar>
  </AppBar>
);
        }
export default Header;
