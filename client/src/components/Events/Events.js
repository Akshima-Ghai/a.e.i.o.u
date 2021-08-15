import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, CircularProgress, Typography, Box, Button, Container, Divider } from "@material-ui/core";
import moment from "moment";

import Event from "./Event/Event";
import useStyles from "./styles";

const Events = () => {
  const { events, isLoading } = useSelector((state) => {
    return state.events;
  });
  const current = events.filter((event) => {
    const date = moment(new Date(event.createdAt)).format("DD-MM-YYYY");
    const currdate = moment(new Date()).format("DD-MM-YYYY");
    // return date == currdate;
    return event.status == "Not Reported" && date == currdate;
  });
  const classes = useStyles();
  const length = current.length;
  var count = 0;
  if (!current.length && !isLoading)
    return (
      <Container className={classes.box}>
        <Grid container className={classes.noPosts}>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ fontWeight: "500", fontSize: "2rem" }}>
              No Events
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button component={Link} to="/quiz" className={classes.button} size="small" variant="contained">
                Start Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );

  return isLoading ? (
    <Grid className={classes.loading}>
      <CircularProgress />
    </Grid>
  ) : (
    <Container className={classes.box}>
      <Grid className={classes.container} container alignItems="stretch">
        {current.map((event) => {
          count = count + 1;
          return (
            <Grid key={event._id} item xs={12} sm={12} md={12} lg={12}>
              <Event event={event} />
              {length != count && <Divider />}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Events;
