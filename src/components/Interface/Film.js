import React, { Component } from "react";
import "../../App.css";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  Button,
  CardMedia,
  Card,
  CardContent,
  CardHeader,
  Typography,
  responsiveFontSizes,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "fontsource-roboto";
import "react-animated-slider/build/horizontal.css";
import CQI from "../../assets/CQI.jpg";
import BeneathPoster from "../../assets/TheBeneathPoster.jpg";
import BearsPoster from "../../assets/bearsposter.png";
import LedAstrayPoster from "../../assets/ledastrayposter.jpg";
import WTWSPoster from "../../assets/WTWSPoster.jpg";
import UprootedPoster from "../../assets/UprootedPoster.png";
import IMDB from "../../assets/IMDB.jpg";
import WaterfallPic from "../../assets/WaterfallPic.png";

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

const Film = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle}>
              <h1>FILM</h1>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  Film has been a large part of my life alongside music. Editing
                  and audio mixing is what I typically enjoy the most. From
                  humble beginnings creating comedy sketches with my friends in
                  school to full scale college productions, the entire
                  film-making process is always exciting no matter the task.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>The Beneath</h1>
              <h2>(2020)</h2>
              <CardContent className={classes.subtext}>
                This is a thrilling solo short film that I made completely by
                myself over quarantine. Writing, cinematography, acting, music
                composition, and editing.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=CutljD3GbtI"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>WATCH</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={BeneathPoster} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>While The World Slept</h1>
              <h2>(2019)</h2>
              <CardContent className={classes.subtext}>
                I was the Assistant Director and Music Composer on While The
                World Slept, also in charge of sound effects and some special
                effects. I play a small part of "Ben" in a scene towards the
                beginning, and was very involved in creating the sets, as well
                as sending out weekly call sheets to cast and crew.
              </CardContent>
              <CardContent>
                <a
                  href={"https://vimeo.com/388547235"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>WATCH</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={WTWSPoster} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Led Astray</h1>
              <h2>(2019)</h2>
              <CardContent className={classes.subtext}>
                I was the Chief Editor and Music Composer for Led Astray,
                essentially in charge of putting the entire film together from
                start to finish. On top of that, I re-edited the entire film
                over the summer of 2019 to cut down on any additional length
                that the film had original released as.
              </CardContent>
              <CardContent>
                <a
                  href={"https://vimeo.com/362589128"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>WATCH</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={LedAstrayPoster} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Bears 4</h1>
              <h2>(2019)</h2>
              <CardContent className={classes.subtext}>
                This is a comedy film that I entirely produced and edited, with
                the help of a director and cinematography which was often
                exchanged. This movie, being a comedic action piece, had a
                base-story with all acting being improvised. Originally started
                in 2017, this was a testament to make a feature-length film.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=pqeXHD91OIY"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>WATCH</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={BearsPoster} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Uprooted</h1>
              <h2>(2018)</h2>
              <CardContent className={classes.subtext}>
                I was the Assistant Editor and Music Composer for Uprooted, in
                charge of organizing clips to send to the chief editor, making
                assemblies, rough cuts, and communicating with the rest of the
                crew to ensure weekly goals.
              </CardContent>
              <CardContent>
                <a
                  href={"https://vimeo.com/313218220"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>WATCH</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={UprootedPoster} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>The Fortune Cookie</h1>
              <h2>(2017)</h2>
              <CardContent className={classes.subtext}>
                This video was an assignment for my Video Production class, in
                which we were given pre-recorded footage from a 2012 film. Our
                goal was to re-edit the footage based off of the script. All of
                the editing in this video was done with Avid Media Composer. I
                was awarded a "Communication Quality Initiative" award (CQI) for
                this project, showing professional quality.
              </CardContent>
              <CardContent>
                <Link to="/categories/fortune" className={classes.link}>
                  <Button className={classes.button}>WATCH</Button>
                </Link>
              </CardContent>
              <CardMedia image={CQI} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>IMDB</h1>
              <h2>JACOB C. SMITH</h2>
              <CardContent className={classes.subtext}>
                Jacob C. Smith is a composer and actor, known for The Beneath
                (2020), Led Astray (2019) and While the World Slept (2019).
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.imdb.com/name/nm11328575/"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LINK</Button>
                </a>
              </CardContent>
              <CardMedia image={IMDB} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>YouTube</h1>
              <h2>Waterfall Productions</h2>
              <CardContent className={classes.subtext}>
                My Youtube channel since 2012, dedicated to anything from my
                more serious productions to just for fun videos.
              </CardContent>
              <CardContent>
                <a
                  href={
                    "https://www.youtube.com/channel/UCRIwriWmK-SMRJRD3N2S-yg"
                  }
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LINK</Button>
                </a>
              </CardContent>
              <CardMedia image={WaterfallPic} className={classes.media} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Film;
