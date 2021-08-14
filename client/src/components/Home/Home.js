import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getEvents } from "../../actions/events";
import Events from "../Events/Events";
import useStyles from "./styles";
import EventsTable from "../EventsTable/EventsTable";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getEvents()); // eslint-disable-next-line
  }, []);

  return (
    <Container className={classes.mainGrid} spacing={2}>
      <Grid className={classes.startGrid}>
        <Typography>
          Hello {user.name}, <br /> How are you feeling Today?
        </Typography>
        <Button component={Link} to="/quiz" size="small" variant="contained" color="primary">
          Start Now
        </Button>
      </Grid>
      <Grid className={classes.startGrid}>
        <Grid item>
          <Events />
        </Grid>
        <Grid item>
          <EventsTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
