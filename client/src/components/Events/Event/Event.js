import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardActions, CardContent, Typography, Grid, IconButton } from "@material-ui/core/";
import { deleteEvent } from "../../../actions/events";
import useStyles from "./styles";

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Card className={classes.card} raised elevation={6}>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" align="right">
          {moment(event.createdAt).fromNow()}
        </Typography>
        <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ fontWeight: "500" }} display="inline" className={classes.title}>
              {event.emotion}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ color: "#0062ff" }} variant="h4" display="inline" className={classes.title}>
              {event.task}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ fontWeight: "500" }} display="inline" className={classes.title}>
              {event.reward}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid className={classes.applyBtn}>
          {user && (
            <IconButton className={classes.expand} color="secondary" onClick={() => dispatch(deleteEvent(event._id))}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};
export default Event;
