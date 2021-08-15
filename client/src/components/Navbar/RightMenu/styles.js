import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  signInBtn: {
    backgroundColor: "#068fa0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#468fa0",
    },
    "&:focus": {
      backgroundColor: "#468fa0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 0.2rem",
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  profile: {
    color: theme.palette.getContrastText("#068fa0"),
    backgroundColor: "#068fa0",
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
    },
  },
}));
