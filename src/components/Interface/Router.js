import React from "react";
import "../../App.css";
import { Route, Switch } from "react-router-dom";
import Film from "./Film";
import Music from "./Music";
import Radio from "./RadioNews";
import Home from "./Home";
import Fortune from './Fortune'
import ContactContainer from './ContactContainer'

const CategoryNavbar = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories/film">
          <Film />
        </Route>
        <Route exact path="/categories/music">
          <Music />
        </Route>
        <Route exact path="/categories/radio">
          <Radio />
        </Route>
        <Route exact path="/categories/fortune">
          <Fortune />
        </Route>
        <Route exact path="/contact">
          <ContactContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoryNavbar;
