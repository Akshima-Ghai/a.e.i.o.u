import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEvent } from "../../actions/events";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import { questions } from "./qData";
import useStyles from "./styles";

const Quiz = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentQ, setCurrentQ] = useState(0);
  const [showResult, setShowResult] = useState(false);
  let [taskId, setTaskId] = useState("");
  let [emojiId, setEmojiId] = useState("");
  let [rewardId, setRewardId] = useState("");

  const handleSubmitOptions = (i) => {
    let nextQ = currentQ + 1;
    if (questions[currentQ].emoji) {
      setEmojiId(i);
    }
    if (questions[currentQ].reward) {
      setRewardId(i);
    }
    if (questions[currentQ].task) {
      setTaskId(i);
    }
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };
  console.log("taskId=" + taskId);
  console.log("emojiId=" + emojiId);
  console.log("rewardId=" + rewardId);
  const handleSubmit = () => {
    const eventData = { emotion: emojiId, task: taskId, reward: rewardId };
    console.log(eventData);
    dispatch(createEvent(eventData, history));
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={2}>
        {showResult ? (
          <>
            <Typography variant="h5">Ready for your task?</Typography>
            {questions[1].answerOptions[taskId - 1].points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <Button className={classes.option} variant="outlined" color="primary" onClick={() => handleSubmit()}>
              I Accept
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">{questions[currentQ].questionText}</Typography>
            <Grid item className={classes.optionsGrid}>
              {questions[currentQ].answerOptions.map((option) => (
                <Button className={classes.option} variant="outlined" color="primary" key={option.id} onClick={() => handleSubmitOptions(option.id)}>
                  {option.answerText}
                </Button>
              ))}
            </Grid>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Quiz;
