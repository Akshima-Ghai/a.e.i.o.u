import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import { tasks } from './taskData';
import { questions } from './qData';
import useStyles from './styles';

const Quiz = () => {
    const classes = useStyles();

    const [currentQ, setCurrentQ] = useState(0);
    const [showResult, setShowResult] = useState(false);
    let [taskId, setTaskId] = useState('');
    let [emojiId, setEmojiId] = useState('');
    let [rewardId, setRewardId] = useState('');

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
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={2}>
                {showResult ? (
                    <>
                        <Typography variant="h5">Ready for your task?</Typography>
                        {tasks.map((task) => {
                            return (task.id == taskId && <>
                                {task.points.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </>)
                        })}
                    </>
                ) : (
                    <>
                        <Typography variant="h5">{questions[currentQ].questionText}</Typography>
                        <Grid item className={classes.optionsGrid}>
                            {questions[currentQ].answerOptions.map((option) => (
                                <Button className={classes.option} variant="outlined" color="primary" key={option.id} onClick={() => handleSubmitOptions(option.id)}>{option.answerText}</Button>
                            ))}
                        </Grid>
                    </>
                )}
            </Paper>
        </Container>
    )
}

export default Quiz;