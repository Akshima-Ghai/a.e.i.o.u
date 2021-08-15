import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Card, CardActions, CardMedia, CardContent, Typography, Grid, Button } from "@material-ui/core/";
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
    const reward = event.reward;
    history.push(`/reward/${reward}`);
    dispatch(updateEvent(event._id, status, history));
  };
  const handleCancelledStatus = () => {
    const status = { status: "Cancelled" };
    console.log(status);
    dispatch(updateEvent(event._id, status, history));
  };
  return (
    <Card className={classes.card} elevation={0}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.overlay2} variant="subtitle2" align="right">
          {moment(event.createdAt).fromNow()}
        </Typography>
        <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={0}>
          <Grid item xs={12}>
            <Typography style={{ color: "#0a4849" }} variant="h4" display="inline" className={classes.title}>
              {questions[1].answerOptions[event.task - 1].answerText}
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} sm={6} md={6} lg={6} style={{ display: "flex", flexDirection: "column" }} justifyContent="center">
              <>
                {questions[1].answerOptions[event.task - 1].points.map((item, index) => {
                  return (
                    <Typography key={index} style={{ color: "#0a4849" }} variant="body1" display="inline" className={classes.title}>
                      {item}
                    </Typography>
                  );
                })}
                <Grid className={classes.applyBtn}>
                  {user && (
                    <>
                      <Button className={classes.applyCompleted} size="small" variant="outlined" onClick={() => handleCompletedStatus()}>
                        Done
                      </Button>
                      <Button className={classes.applyCancelled} size="small" variant="outlined" onClick={() => handleCancelledStatus()}>
                        Cancel
                      </Button>
                    </>
                  )}
                </Grid>
              </>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} style={{ display: "flex" }} justifyContent="center" alignItems="center">
              <img
                className={classes.img}
                alt={questions[1].answerOptions[event.task - 1].answerText}
                src={questions[1].answerOptions[event.task - 1].ansImg}
                title={questions[1].answerOptions[event.task - 1].answerText}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Event;
