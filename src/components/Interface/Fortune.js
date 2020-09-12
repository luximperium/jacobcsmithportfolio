import React, { Component } from "react";
import "../../App.css";
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
