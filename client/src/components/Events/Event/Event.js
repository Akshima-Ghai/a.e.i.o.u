import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Card, CardActions, CardContent, Typography, Grid, Button } from "@material-ui/core/";
import { updateEvent } from "../../../actions/events";
import { questions } from "../../Quiz/qData";
import useStyles from "./styles";

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleCompletedStatus = () => {
    const status = { status: "Completed" };
    console.log(status);
    dispatch(updateEvent(event._id, status, history));
  };
  const handleCancelledStatus = () => {
    const status = { status: "Cancelled" };
    console.log(status);
    dispatch(updateEvent(event._id, status, history));
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" align="right">
          {moment(event.createdAt).fromNow()}
        </Typography>
        <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={0}>
          <Grid item xs={12}>
            <Typography style={{ color: "#0062ff" }} variant="h4" display="inline" className={classes.title}>
              {questions[1].answerOptions[event.task - 1].answerText}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid className={classes.applyBtn}>
          {user && (
            <>
              <Button variant="outlined" color="primary" onClick={() => handleCompletedStatus()}>
                Done
              </Button>
              <Button variant="outlined" color="primary" onClick={() => handleCancelledStatus()}>
                Cancelled
              </Button>
            </>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};
export default Event;
