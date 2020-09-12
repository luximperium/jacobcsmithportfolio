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
import FortuneCookie from '../../assets/Fortune.mp4'

const Fortune = () => {

  return (
    <div className="Fortune">
      <h1 className="Header-Link">Fortune Cookie</h1>
      <video controls src={FortuneCookie} />
    </div>
  );
};

export default Fortune;
