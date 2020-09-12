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
import ShowPromo from "../../assets/Media/ShowPromo.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import KECC from "../../assets/Media/KECCShow.mp3";
import BlackPantherPromo from "../../assets/Media/BlackPantherRadioPromo.mp3";
import UprootedPromo from "../../assets/Media/UprootedRadioPromo.mp3";
import NamelessPodcast from "../../assets/Media/NamelessPodcastEpisodeMusic.mp3";
import MusicDonut from "../../assets/Media/musicdonutnewswatch2.mp4";
import JSMITH from "../../assets/Media/JSMITHFootball.mp4";
import ReactPlayer from "react-player";

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
  cardtitle2: {
    color: "wheat",
    backgroundColor: "darkslategray",
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
  audioplayer: {
    backgroundColor: "wheat",
  },
}));

const RadioNews = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle}>
              <h1>RADIO/NEWS</h1>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1>RADIO</h1>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  I hosted and worked on a two hour live broadcast, called The
                  Jacob Nameless Show, every week throughout the fall semester,
                  covering various news topics, entertainment, technology and
                  commentary.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} xs={12}>
            <Card className={classes.card}>
              <h1>Show Promo</h1>
              <AudioPlayer
                id="audioplayer"
                className={classes.audioplayer}
                src={ShowPromo}
                onPlay={(e) => console.log("onPlay")}
              />
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={classes.card}>
              <h1>KECC Show</h1>
              <AudioPlayer
                id="audioplayer"
                className={classes.audioplayer}
                src={KECC}
                onPlay={(e) => console.log("onPlay")}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.maintitle}>
        <Grid item xs={12}>
          <Card className={classes.cardtitle2}>
            <h1>PODCAST & PROMOS</h1>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Aside from my radio show, I recorded and produced a podcast
                discussing musical elements with two other musicians along with
                some radio promotions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={4} className={classes.root}>
        <Grid item sm={4} xs={12}>
          <Card className={classes.card}>
            <h1>Nameless Podcast Episode 1 - Music</h1>
            <AudioPlayer
              id="audioplayer"
              className={classes.audioplayer}
              src={NamelessPodcast}
              onPlay={(e) => console.log("onPlay")}
            />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className={classes.card}>
            <h1>Uprooted Radio Promo</h1>
            <AudioPlayer
              id="audioplayer"
              className={classes.audioplayer}
              src={UprootedPromo}
              onPlay={(e) => console.log("onPlay")}
            />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className={classes.card}>
            <h1>Black Panther Radio Promo</h1>
            <AudioPlayer
              id="audioplayer"
              className={classes.audioplayer}
              src={BlackPantherPromo}
              onPlay={(e) => console.log("onPlay")}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.maintitle}>
        <Grid item xs={12}>
          <Card className={classes.cardtitle2}>
            <h1>NEWS</h1>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                These news packages and stories were written, recorded,
                captured, and edited by me. They range from a variety of college
                events.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={4} className={classes.root}>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <h1>Football Story</h1>
            <h2>(10/1/18)</h2>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/457260691?color=f5deb3"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <h1>Music Recital Story</h1>
            <h2>(11/26/18)</h2>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/457260769?color=f5deb3"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <h1>Campus Life Story</h1>
            <h2>(9/26/17)</h2>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/457260897?color=f5deb3"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <h1>Campus Life Story</h1>
            <h2>(9/26/17)</h2>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/377867752?color=f5deb3"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RadioNews;
