import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../Components/Home/Header";

const useStyles = makeStyles(() => ({
}
));

const Home = () => {
  const styles = useStyles();
  console.log(styles);

  return (
    <>
      <Header />
      {/* <Grid
        container
        alignContent="center"
        justify="center"
      >
        <Grid item>
          <Typography
            align="center"
            component="h2"
            variant="h2"
            gutterBottom
            id="Projects"
          >
            HOME
          </Typography>

        </Grid>
      </Grid> */}
    </>
  );
};

export default Home;
