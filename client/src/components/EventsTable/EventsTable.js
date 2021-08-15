import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { TableContainer, Typography, Chip, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteEvent } from "../../actions/events";
import { questions } from "../Quiz/qData";

const EventsTable = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { events } = useSelector((state) => {
        return state.events;
    });

    if (!events.length) {
        return (
            <></>
        )
    }
    return (
        <TableContainer className={classes.table} component={Paper} elevation={0}>
            <Typography variant="h4" style={{ color: '#01444a' }} className={classes.title}>Event History</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6" style={{ color: '#01444a', textAlign: 'center' }}>Date</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" style={{ color: '#01444a', textAlign: 'center' }}>Emotion</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" style={{ color: '#01444a', textAlign: 'center' }}>Task</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" style={{ color: '#01444a', textAlign: 'center' }}>Status</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" style={{ color: '#01444a', textAlign: 'center' }}>Reward</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" style={{ color: '#01444a', textAlign: 'center' }}>Delete</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event._id}>
                            <TableCell style={{ borderBottom: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                                <Typography component="p" style={{ fontWeight: 'bold', color: '#0a4849', textAlign: 'center' }}>{moment(new Date(event.createdAt)).format("l")}</Typography>
                            </TableCell>
                            {questions[0].answerOptions.map((item) => (
                                item.id === event.emotion &&
                                <TableCell key={item.id} style={{ borderBottom: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                                    <Typography component="p" style={{ fontWeight: 'bold', color: '#0a4849', textAlign: "center", fontSize: "1.5rem" }}>{item.ansEmo}</Typography>
                                </TableCell>
                            ))}
                            {questions[1].answerOptions.map((item) => (
                                item.id === event.task &&
                                <TableCell key={item.id} style={{ borderBottom: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                                    <Typography component="p" style={{ fontWeight: 'bold', color: '#0a4849', textAlign: 'center' }}>{item.answerText}</Typography>
                                </TableCell>
                            ))}
                            <TableCell style={{ borderBottom: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                                {event.status === "Not Reported" ?
                                    <Chip size="small" label={event.status} style={{ fontWeight: '600', backgroundColor: "#fee4d2", color: "#b2560d", textAlign: 'center' }} /> : (
                                        event.status === "Completed" ?
                                            <Chip size="small" label={event.status} style={{ fontWeight: '600', backgroundColor: "#cdf6f8", color: "#024649", textAlign: 'center' }} /> :
                                            <Chip size="small" label={event.status} style={{ fontWeight: '600', backgroundColor: "#ffdadb", color: "#ff0500", textAlign: 'center' }} />
                                    )}
                            </TableCell>
                            {questions[2].answerOptions.map((item) => (
                                item.id === event.reward &&
                                <TableCell key={item.id} style={{ borderBottom: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                                    <Typography component="p" style={{ fontWeight: 'bold', color: '#0a4849', textAlign: 'center' }}>{item.answerText}</Typography>
                                </TableCell>
                            ))}
                            <TableCell style={{ borderBottom: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem', textAlign: "center" }}>
                                <IconButton aria-label="delete event" component="span" onClick={() => dispatch(deleteEvent(event._id))}>
                                    <DeleteIcon color="secondary" />
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
