import React from "react";
import PropTypes from "prop-types";
import {
  Card, CardMedia, CardContent, Button, Typography, makeStyles, CardActions, Divider,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchOutlinedIcon from "@material-ui/icons/LaunchOutlined";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  card: {
    margin: "auto auto 5% auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 750,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      transform: "translateY(2px)",
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
    },
    [breakpoints.up("md")]: {
      flexDirection: "column",
      // paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginTop: spacing(-3),
    borderRadius: spacing(2),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    backgroundSize: "contain",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      // width: "88%",
      // marginLeft: spacing(-3),
      marginTop: 0,
      // transform: "translateX(-8px)",
    },
    "&:after": {
      content: "\" \"",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  overline: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: 12,
    marginBottom: "0.875em",
    color: "rgba(0, 0, 0, 0.54)",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "0.35em",
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  body: {
    marginBottom: spacing(2),
    fontSize: "1.5rem",
    letterSpacing: "0.00938em",
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  cardActions: {
    paddingLeft: 0,
  },
  button: {
    color: "#ffffff",
    boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
    paddingLeft: "24px",
    borderRadius: "100px",
    paddingRight: "24px",
    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
  },
}));

// React.memo
const ProjectCard = (({
  id, description, name, repo, depo,
}) => {
  const {
    card, media, overline, heading, body, button, cardActions,
  } = useStyles();

  return (
    <Card className={card}>
      <CardMedia
        className={media}
        component="img"
        alt={name}
        title={name}
        src={require(`../Assets/Stills/${id}.png`).default}
      />
      <CardContent>
        <Typography component="span" className={overline}>
          28 MAR 2019
        </Typography>

        <Typography component="h4" className={heading}>
          {name}
        </Typography>

        <Typography component="p" className={body}>
          {description}
        </Typography>

        <Divider />
        <CardActions className={cardActions}>
          <Button
            className={button}
            startIcon={<GitHubIcon />}
            href={repo}
          >
            Read More
          </Button>
          <Button
            className={button}
            startIcon={<LaunchOutlinedIcon />}
            href={depo}
          >
            Visit Site
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
});

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  depo: PropTypes.string.isRequired,
};

export default ProjectCard;
