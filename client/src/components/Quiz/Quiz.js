import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEvent } from "../../actions/events";
import { Container, Grid, Card, CardContent, CardActionArea, CardMedia, Typography, Button } from "@material-ui/core";
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

  const handleSubmit = () => {
    const eventData = { emotion: emojiId, task: taskId, reward: rewardId };
    const user = JSON.parse(localStorage.getItem("profile"));
    dispatch(createEvent(eventData, history, user.result.email));
  };
  return (
    <Container className={classes.quiz} component="main" maxWidth="xs">
      <Grid className={classes.paper}>
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
                <Card className={classes.option} onClick={() => handleSubmitOptions(option.id)}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={option.ansImg}
                      title={option.answerText}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {option.answerText}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Quiz;
