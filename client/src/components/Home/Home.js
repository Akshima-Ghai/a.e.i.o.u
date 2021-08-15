import React, { useEffect } from "react";
import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../actions/events";
import Events from "../Events/Events";
import useStyles from "./styles";
import EventsTable from "../EventsTable/EventsTable";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  let { events } = useSelector((state) => {
    return state.events;
  });

  useEffect(() => {
    dispatch(getEvents()); // eslint-disable-next-line
  }, []);

  events = [...events].reverse();

  let counter = 0;
  if (events.length > 0) {
    let startdate = moment(new Date(events[0].createdAt)).format().split("-")[2].slice(0, 2);

    counter = events[0].status === "Completed" ? 1 : 0;
    for (let i = 1; i < events.length; i++) {
      let date = moment(new Date(events[i].createdAt)).format().split("-")[2].slice(0, 2);// eslint-disable-next-line
      if (date == startdate) {
        continue;
      } else if (events[i].status !== "Completed") {
        continue;// eslint-disable-next-line
      } else if (date == parseInt(startdate) + 1) {
        counter += 1;
        startdate = date;// eslint-disable-next-line
      } else if (date != parseInt(startdate) + 1 && events[i].status === "Completed") {
        startdate = date;
        counter = 1;
      } else {
        startdate = date;
        counter = 0;
      }
    }
  } else {
    counter = 0;
  }

  return (
    <Grid className={classes.gridContainer} container justifyContent="center" alignItems="stretch" spacing={3}>
      <Grid item xs={12} sm={11} md={8} lg={7}>
        <Container className={classes.box}>
          <Grid className={classes.gridContainer} container justifyContent="center" alignItems="stretch">
            <Grid item xs={12}>
              <Box textAlign="left">
                <Typography style={{ color: "#0a4849" }} variant="h5" display="inline" className={classes.title}>
                  Hello <span style={{ color: "#068fa0" }}>{user.result.name}</span>, <br /> How are you feeling Today?
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="left">
                <Button component={Link} to="/quiz" className={classes.button} size="small" variant="contained">
                  Start Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12} sm={11} md={8} lg={7}>
        <Events />
      </Grid>
      <Grid item xs={12} sm={11} md={8} lg={7}>
        <EventsTable counter={counter} />
      </Grid>
    </Grid>
  );
};

export default Home;
