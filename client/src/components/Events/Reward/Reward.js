import React from "react";
import { Link, useParams } from "react-router-dom";
import { Paper, Typography, Button, Grid, Container } from "@material-ui/core";
import { questions } from "../../Quiz/qData";
import useStyles from "./styles";

const Reward = () => {
  const classes = useStyles();
  const reward = useParams();
  const rewardId = reward.id;
  return (
    <Container className={classes.quiz} component="main" maxWidth="xs">
      <Grid className={classes.paper}>
        <Paper className={classes.final}>
          <Typography className={classes.quizTitle}>Enjoy your reward</Typography>
          {/* <Typography className={classes.points}>{questions[2].answerOptions[rewardId - 1].answerText}</Typography> */}
          {questions[2].answerOptions[rewardId - 1].points.map((item, index) => (
            <Typography className={classes.points} key={index}>
              {item}
            </Typography>
          ))}
          <img
            className={classes.img}
            alt={questions[2].answerOptions[rewardId - 1].answerText}
            src={questions[2].answerOptions[rewardId - 1].ansImg}
            title={questions[2].answerOptions[rewardId - 1].answerText}
          />
          <Button component={Link} to="/home" className={classes.button} variant="contained">
            Back
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Reward;
