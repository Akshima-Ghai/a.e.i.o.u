import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#068fa0",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: "#068fa0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#468fa0",
    },
    "&:focus": {
      backgroundColor: "#468fa0",
    },
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    backgroundColor: "#068fa0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#468fa0",
    },
    "&:focus": {
      backgroundColor: "#468fa0",
    },
    marginBottom: theme.spacing(2),
  },
}));
