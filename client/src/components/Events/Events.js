import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

import Event from "./Event/Event";
import useStyles from "./styles";

const Events = () => {
  const { events, isLoading } = useSelector((state) => {
    return state.events;
  });

  const classes = useStyles();

  if (!events.length && !isLoading)
    return (
      <Grid className={classes.noPosts}>
        <Typography variant="h5" style={{ fontWeight: "500", fontSize: "2rem" }}>
          No Events
        </Typography>
      </Grid>
    );

  return isLoading ? (
    <Grid className={classes.loading}>
      <CircularProgress />
    </Grid>
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {events.map((event) => (
        <Grid key={event._id} item xs={12} sm={12} md={12} lg={12}>
          <Event event={event} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Events;
