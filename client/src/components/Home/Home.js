import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
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
  console.log(user);
  useEffect(() => {
    dispatch(getEvents()); // eslint-disable-next-line 
  }, []);
  
  
  return (
    <Grid className={classes.gridContainer} container justify="center" alignItems="stretch" spacing={3}>
      <Grid item xs={12} sm={11} md={8} lg={7}>
        <Container className={classes.box}>
          <Grid className={classes.gridContainer} container justify="center" alignItems="stretch">
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography style={{ color: "#0a4849" }} variant="h5" display="inline" className={classes.title}>
                  Hello <span style={{ color: '#068fa0' }}>{user.result.name}</span>, <br /> How are you feeling Today?
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Button component={Link} to="/quiz" className={classes.button} variant="contained">
                  Start Now
                </Button>
              </Box>
            </Grid>
 <div className={classes.heroItemContainer}>
          <h2 className={classes.heroItemHead}><span className={classes.heroItemSpan}>&#9733;</span> You are on Streak</h2>
          <h1 className={classes.heroItemScore}>{counter}</h1>
        </div>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12} sm={11} md={8} lg={7}>
        <Events />
      </Grid>

      <Grid item xs={12} sm={11} md={8} lg={7}>
        <EventsTable />
      </Grid>
    </Grid>
  );
};

export default Home;
