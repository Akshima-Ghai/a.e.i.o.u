import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    signInBtn: {
        backgroundColor: "#0062ff",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#1473e7",
        },
        "&:focus": {
            backgroundColor: "#1473e7",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0.5rem 0.2rem"
        },
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    purple: {
        color: theme.palette.getContrastText("#0062ff"),
        backgroundColor: "#0062ff",
    },
    icon: {
        padding: "0",
    },
    button: {
        "&:hover": {
            backgroundColor: "#ececec",
        },
        "&:focus": {
            backgroundColor: "#ececec",
        },
        "&:active": {
            backgroundColor: "#ececec",
        }
    },
}));