import React, { Component } from "react";
import "../../App.css";
import {
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import "fontsource-roboto";
import "react-animated-slider/build/horizontal.css";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
    app: {},
    root: {
      position: "relative",
      padding: theme.spacing(2),
    },
    root2: {
      position: "relative",
      padding: theme.spacing(2),
      textAlign: "center",
    },
    mainroot: {
      position: "relative",
      padding: theme.spacing(2),
    },
    maintitle: {
      position: "relative",
      padding: theme.spacing(4),
    },
    jacobpic: {
      paddingTop: "25vh", // 16:9
    },
    button: {
      margin: "1em",
      color: "wheat",
    },
    button2: {
      margin: "1em",
      color: "white",
      textShadow: "3px 3px black",
      textDecoration: "none",
      fontSize: "18pt",
    },
    titletext: {
      marginBottom: "-1em",
      color: "wheat",
    },
    jacobtext: {
      marginBottom: "-1em",
      color: "wheat",
      fontFamily: "roboto",
    },
    link: {
      color: "wheat",
      textDecoration: "none",
    },
    media: {
      height: "0",
      paddingTop: "150%", // 16:9
    },
    media2: {
      height: "0",
      paddingTop: "47.5%", // 16:9
    },
    card: {
      backgroundColor: "rgb(23, 39, 39)",
      color: "wheat",
      textAlign: "center",
    },
    cardtitle: {
      backgroundColor: "rgb(23, 39, 39)",
      color: "wheat",
      textAlign: "center",
    },
    card2: {
      backgroundColor: "rgb(23, 39, 39)",
      color: "wheat",
      padding: theme.spacing(2),
      textAlign: "center",
    },
    subtext: {
      minHeight: "9.4em",
    },
  }));

const ContactContainer = () => {
    const classes = useStyles();

  return (
    <div className="ContactContainer">
          <div className="ContactSubContainer">
            <Card className={classes.card}>
              <CardContent>
                <Contact />
              </CardContent>
            </Card>
            </div>
    </div>
  );
};

export default ContactContainer;
