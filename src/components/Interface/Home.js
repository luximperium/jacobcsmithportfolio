import React, { Component } from "react";
import "../../App.css";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  Button,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import Film from "../../assets/thebeneath.jpg";
import News from '../../assets/NewsPhoto.png'
import Music from "../../assets/TakeYourTime.jpg";
import { Link } from "react-router-dom";
import "fontsource-roboto";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import content from "./Content";

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
    paddingTop: "56.25%", // 16:9
  },
  card: {
    backgroundColor: "rgb(23, 39, 39)",
    color: "wheat",
    paddingTop: theme.spacing(2),
    textAlign: "center",
  },
  card2: {
    backgroundColor: "rgb(23, 39, 39)",
    color: "wheat",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  cardtitle: {
    backgroundColor: "rgb(23, 39, 39)",
    color: "wheat",
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid
          direction="column"
          container
          xs={12}
          spacing={4}
          className={classes.root2}
        >
          <Grid item xs={12}>
            <Card className={classes.card2}>
              <CardContent>
                <Slider autoplay={3000}>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        background: `url('${item.image}') no-repeat center center`,
                      }}
                    >
                      <div className="center carousel">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a href={item.link} className={classes.button2} target="_blank" rel="noopener noreferrer">
                          <Button className={classes.button2}>
                            {item.button}
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.mainroot}>
          <Grid
            direction="column"
            container
            xs={12}
            className={classes.root2}
          >
            <Grid item xs={12}>
              <Card className={classes.cardtitle}>
                <CardContent>
                  <h1>Self Summary</h1>
                </CardContent>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    As a graduate from Evangel University with a Bachelor of
                    Science in Film & Broadcasting, my skills range from video
                    production to radio broadcasting. Music has also been a
                    large part of my journey, having produced and recorded two
                    full length albums, as well as numerous film scores for the
                    films I have worked on. My skills shine through with a
                    solution to many tasks in the media field. This is a
                    catalog of my work from 2014 - 2020, with video, audio, and
                    document examples.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} md={4} xs={12}>
            <Card className={classes.card}>
              <h1>FILM</h1>
              <Link to="/categories/film" className={classes.link}>
                <Button className={classes.button}>VIEW</Button>
              </Link>
              <CardMedia className={classes.media} image={Film} />
            </Card>
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <Card className={classes.card}>
              <h1>MUSIC</h1>
              <Link to="/categories/music" className={classes.link}>
                <Button className={classes.button}>VIEW</Button>
              </Link>
              <CardMedia className={classes.media} image={Music} />
            </Card>
          </Grid>
          <Grid item sm={12} md={4} xs={12}>
            <Card className={classes.card}>
              <h1>RADIO/NEWS</h1>
              <Link to="/categories/radio" className={classes.link}>
                <Button className={classes.button}>VIEW</Button>
              </Link>
              <CardMedia className={classes.media} image={News} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
