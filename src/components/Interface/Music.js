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
import "fontsource-roboto";
import "react-animated-slider/build/horizontal.css";
import BeholderDistance from "../../assets/beholderdistance.jpg";
import JacobNameless from "../../assets/JacobNameless.jpg";
import Inspire from "../../assets/inspire.jpg";
import TakeYourTime from "../../assets/TakeYourTime.jpg";
import Ghost2u from "../../assets/Ghost2u.jpg";
import TheMemory from "../../assets/TheMemory.png";
import TheFuture from "../../assets/TheFuture.jpg";
import StartItAgain from "../../assets/startitagain.jpg";
import LMSTR from "../../assets/LMSTR.jpg";
import BestWorst from "../../assets/BestWorst.jpg";
import PeacefulPlace from '../../assets/PeacefulPlace.jpg'
import WTWSOST from '../../assets/WTWSOST.jpg'
import ledastrayOST from '../../assets/ledastrayOST.jpg'
import uprootedost from '../../assets/uprootedost.jpg'

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
    paddingTop: "100%", // 16:9
  },
  media2: {
    height: "0",
    paddingTop: "47.5%", // 16:9
  },
  card: {
    backgroundColor: "rgb(23, 39, 39)",
    color: "wheat",
    textAlign: "center"
  },
  cardtitle: {
    backgroundColor: "rgb(23, 39, 39)",
    color: "wheat",
    textAlign: "center",
  },
  cardtitle2: {
    color: "rgb(23, 39, 39)",
    backgroundColor: "wheat",
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

const Music = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle}>
              <h1>MUSIC</h1>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  As far back as I can remember, music has been a large part of
                  my life. When I finally started producing in 2010, I knew it
                  was something I would want to pursue in the future. Now, I
                  have released two full length albums with various singles
                  under the alias "Nameless Warning" on media platforms
                  everywhere. My sound can be described as a mix of electronic
                  pop and R&B vibe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1>ALBUMS</h1>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item md={4} xs={12}>
            <Card className={classes.card}>
              <h1>The Beholder</h1>
              <h2>(2020)</h2>
              <CardContent className={classes.subtext}>
                This is my third album, released on August 7th, 2020. This album
                was primarily put together during quarantine and deals with
                themes of future uncertainty. It is a concept album that blends
                my typical electronic style with a twist of psychedelic pop.
                Additionally, I held a release festival (Beholderfest) leading
                up to the album with 10 other artists playing mixes they created
                for the event.
              </CardContent>
              <CardContent>
                <a
                  href={
                    "https://namelesswarning.bandcamp.com/album/the-beholder"
                  }
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={BeholderDistance} />
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={classes.card}>
              <h1>Jacob/Nameless</h1>
              <h2>(2018)</h2>
              <CardContent className={classes.subtext}>
                This is my sophomore album, released on August 18th, 2018.
                Nearly two years were put in for writing, recording, producing,
                and mixing this album, showing off an eclectic mix of dance and
                alternative R&B.
              </CardContent>
              <CardContent>
                <a
                  href={
                    "https://namelesswarning.bandcamp.com/album/jacob-nameless"
                  }
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={JacobNameless} />
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={classes.card}>
              <h1>Inspire</h1>
              <h2>(2014)</h2>
              <CardContent className={classes.subtext}>
                This is my first album, released on October 13th, 2014. This
                included my style of dance and electronic tracks with half
                including instrumental and the other half having vocals.
              </CardContent>
              <CardContent>
                <a
                  href={"https://namelesswarning.bandcamp.com/album/inspire"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={Inspire} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1>MUSIC VIDEOS</h1>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>The Memory</h1>
              <h2>(2020)</h2>
              <CardContent className={classes.subtext}>
                The Memory is the second single for my album The Beholder. It
                was shot on the Canon C100 and implements a more
                upbeat/psychedelic mood to the visuals.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=Wl8L5h3TVzM"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={TheMemory} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>The Future</h1>
              <h2>(2020)</h2>
              <CardContent className={classes.subtext}>
                The Future was the first single to my album The Beholder. It was
                shot on the Sony a6000 and implements a darker city visual with
                an additional heist storyline.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=ZA-gyf55dCU"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={TheFuture} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Take Your Time</h1>
              <h2>(2020)</h2>
              <CardContent className={classes.subtext}>
                Take Your Time is a single released on UK label "Savona". This
                video was shot on a Black Magic Cinema Camera all at night,
                taking advantage of the park lights that were available on
                location.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=s43wtHSK3bg"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={TakeYourTime} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Ghost2u</h1>
              <h2>(2019)</h2>
              <CardContent className={classes.subtext}>
                Ghost2u is the single for my 2019 EP "Circling Back". This was
                shot over a summer and then into the beginning of fall.
                Additional editing was made in after effects with frame by frame
                drawing.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=C0djiLQ_zuo"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={Ghost2u} className={classes.media} />
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Start It Again</h1>
              <h2>(2019)</h2>
              <CardContent className={classes.subtext}>
                This is a synthpop single I released as part of my senior
                capstone at Evangel University. It involved me creating the song
                as well as creating a storyboard and directing the music video.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=qXBIefDexps"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={StartItAgain} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Let Me See The Rain</h1>
              <h2>(2018)</h2>
              <CardContent className={classes.subtext}>
                This is the first single from my sophomore album
                "Jacob/Nameless". I wrote, produced, and sang this song, as well
                as edited much of the video. This was filmed in downtown
                Springfield, Missouri.
              </CardContent>
              <CardContent>
                <a
                  href={"https://youtu.be/B5f5xCf0VpI"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={LMSTR} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Best/Worst</h1>
              <h2>(2018)</h2>
              <CardContent className={classes.subtext}>
                This is the second single from my sophomore album
                "Jacob/Nameless". I wrote, produced, and sang this song, as well
                as edited the video. This was filmed in Tampa, Florida.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=UOUDUIlUT8A"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={BestWorst} />
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Card className={classes.card}>
              <h1>Peaceful Place</h1>
              <h2>(2015)</h2>
              <CardContent className={classes.subtext}>
                This is my first music video that was completed for an
                assignment in my acting class in high school, using my single at
                the time "Peaceful Place" - a synthpop vocal song that takes you
                through different landscapes in Missouri.
              </CardContent>
              <CardContent>
                <a
                  href={
                    "https://www.youtube.com/watch?v=qfNd9wfYoRI"
                  }
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={PeacefulPlace} className={classes.media} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1>FILM SOUNDTRACKS</h1>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.mainroot}>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item md={4} xs={12}>
            <Card className={classes.card}>
              <h1>While The World Slept</h1>
              <h2>(2019)</h2>
              <CardContent>
                <a
                  href={"https://jacobcsmith.bandcamp.com/album/while-the-world-slept-official-sountrack"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={WTWSOST} className={classes.media} />
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={classes.card}>
              <h1>Led Astray</h1>
              <h2>(2019)</h2>
              <CardContent>
                <a
                  href={"https://jacobcsmith.bandcamp.com/album/led-astray-official-soundtrack"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={ledastrayOST} className={classes.media} />
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={classes.card}>
              <h1>Uprooted</h1>
              <h2>(2018)</h2>
              <CardContent>
                <a
                  href={"https://jacobcsmith.bandcamp.com/album/uprooted-official-soundtrack"}
                  className={classes.button2}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={uprootedost} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Music;
