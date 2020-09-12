import React from "react";
import "../../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const CategoryNavbar = () => {
  return (
    <div>
      <AppBar position="static" className="CategoryNavbar" color="inherit">
        <Toolbar className="CategoryNavbar" color="inherit">
        <Typography
            variant="title"
            className="CategoryNavbar"
            color="inherit"
          >
            <Button><Link to="/home" className="Category-Link">WHAT I DO:</Link></Button>
          </Typography>
          <Typography
            variant="title"
            className="CategoryNavbar"
            color="inherit"
          >
            <Button><Link to="/categories/film" className="Category-Link">Film</Link></Button>
          </Typography>
          <Typography
            variant="title"
            className="CategoryNavbar"
            color="inherit"
          >
            <Button><Link to="/categories/music" className="Category-Link">Music</Link></Button>
          </Typography>
          <Typography
            variant="title"
            className="CategoryNavbar"
            color="inherit"
          >
            <Button><Link to="/categories/radio" className="Category-Link">Radio/News</Link></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CategoryNavbar;
