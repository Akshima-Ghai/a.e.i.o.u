import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { TableContainer, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteEvent } from "../../actions/events";
import { questions } from "../Quiz/qData";

const EventsTable = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { events, isLoading } = useSelector((state) => {
        return state.events;
    });
    return (
        <TableContainer className={classes.table} component={Paper}>
            <Typography variant="h5" className={classes.title}>Event History</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Emotion</TableCell>
                        <TableCell>Task</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Reward</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event._id}>
                            <TableCell>{moment(new Date(event.createdAt)).format("ll")}</TableCell>
                            {questions[0].answerOptions.map((item) => (
                                item.id == event.emotion &&
                                <TableCell key={item.id}>{item.answerText}</TableCell>
                            ))}
                            {questions[1].answerOptions.map((item) => (
                                item.id == event.task &&
                                <TableCell key={item.id}>{item.answerText}</TableCell>
                            ))}
                            <TableCell>{event.status}</TableCell>
                            {questions[2].answerOptions.map((item) => (
                                item.id == event.reward &&
                                <TableCell key={item.id}>{item.answerText}</TableCell>
                            ))}
                            <TableCell>
                                <IconButton aria-label="delete event" component="span" onClick={() => dispatch(deleteEvent(event._id))}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EventsTable;
