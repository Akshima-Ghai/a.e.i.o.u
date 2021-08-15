import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  quiz: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  optionsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    marginBottom: "0.5rem",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    borderColor: "#068fa0",
    color: "#0b7e8b",
    fontWeight: "500",
    fontSize: "1.5rem",
  },
  quizTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "2rem",
    color: "#016a74",
  },
  img: {
    paddingTop: "10px",
    maxWidth: "25vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40vw",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
      maxWidth: "75vw",
    },
  },
  final: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  acceptBtn: {
    borderColor: "#068fa0",
    color: "#fff",
    borderRadius: "5px",
    backgroundColor: "#068fa0",
    fontWeight: "500",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#068fb0",
    },
    "&:focus": {
      backgroundColor: "#068fb0",
    },
    "&:active": {
      backgroundColor: "#068fb0",
    },
  },
  points: {
    fontSize: "1.3rem",
    color: "#888888",
    marginRight: "auto"
  },
}));
