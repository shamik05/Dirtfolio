import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import {
  Card, CardMedia, CardContent, Button, Typography, makeStyles,
} from "@material-ui/core";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
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
    [breakpoints.up("md")]: {
      flexDirection: "column",
      // paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    // marginLeft: "auto",
    // marginRight: "auto",
    marginTop: spacing(-3),
    // height: 1,
    // paddingBottom: "48%",
    borderRadius: spacing(2),
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
  content: {
    padding: 24,
    // width: "50%",
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));
// React.memo
const ProjectCard = (({ id, description, name }) => {
  const styles = useStyles();
  // const { button: buttonStyles, ...contentStyles } = useBlogTextInfoContentStyles();
  const { button: buttonStyles } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        component="img"
        alt={name}
        title={name}
        src={require(`../Assets/Stills/${id}.png`).default}
      />
      <CardContent>
        <Typography component="span" className={styles.overline}>
          28 MAR 2019
        </Typography>

        <Typography component="h4" className={styles.heading}>
          {name}
        </Typography>

        <Typography component="p" className={styles.body}>
          {description}
        </Typography>
        {/* <TextInfoContent
          classes={contentStyles}
          overline="28 MAR 2019"
          heading={name}
          body={description}
        /> */}
        <Button className={buttonStyles}>Read More</Button>
        <Button className={buttonStyles}>Visit Site</Button>
      </CardContent>
    </Card>
  );
});

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
