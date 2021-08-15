import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getEvents } from "../../actions/events";
import Events from "../Events/Events";
import useStyles from "./styles";
import EventsTable from "../EventsTable/EventsTable";


const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const counter = useSelector((state) => state.events.counter);

  useEffect(() => {
    dispatch(getEvents()); // eslint-disable-next-line 
  }, []);
  
  
  return (
    <Grid className={classes.gridContainer} container justifyContent="center" alignItems="stretch" spacing={3}>
      <div className={classes.heroContainer}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography>
            Hello {user.name}, <br /> How are you feeling Today?
          </Typography>
          <Button component={Link} to="/quiz" size="small" variant="contained" color="primary">
            Start Now
          </Button>
        </Grid>
        <div className={classes.heroItemContainer}>
          <h2 className={classes.heroItemHead}><span className={classes.heroItemSpan}>&#9733;</span> You are on Streak</h2>
          <h1 className={classes.heroItemScore}>{counter}</h1>
        </div>

      </div>

      <Grid item xs={12} sm={9} md={9} lg={8}>
        <Events />
      </Grid>

      <Grid item xs={12} sm={12} md={9} lg={8}>
        <EventsTable />
      </Grid>
    </Grid>
  );
};

export default Home;
