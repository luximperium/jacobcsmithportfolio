import React from "react";
import "../../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import ResumePDF from '../../assets/Resume.pdf'
import DownloadIcon from '../../assets/downloadicon.png'

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" className="Navbar" color="inherit">
        <Toolbar className="Navbar" color="inherit">
          <Grid container xs={12}>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <Button>
                  <Link to="/home" className="Header-Link">
                    JACOB C. SMITH
                  </Link>
                </Button>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <a href={ResumePDF} download className="Header-Link" style={{ color: "wheat" }}>
                <Button className="Header-Link" style={{ color: "wheat" }}>
                    Resume <img src={DownloadIcon} style={{ height: "9pt", margin: "2pt", transform: "translateY(-1px)" }}/>
                </Button>
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <Button>
                  <Link to="/contact" className="Header-Link">
                    Contact
                  </Link>
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
