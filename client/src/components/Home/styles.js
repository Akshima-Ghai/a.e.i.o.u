import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  startGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  mainGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    padding: "10px",
  },
  box: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    border: "1px solid #068fa0",
  },
  button: {
    color: "#fff",
    marginTop: "0.6rem",
    marginBottom: "0.5rem",
    backgroundColor: "#068fa0",
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "#468fa0",
    },
  },
  StreakContainer: {
    textAlign: "center",
  },
  StreakHeader: {
    margin: "0",
  },
  StreakStar: {
    color: "#068fa0",
    width: "1rem",
  },
  StreakCounterContainer: {
    display: "flex",
    justifyContent: "center",
  },
  StreakCounter: {
    marginBottom: "1rem",
    backgroundColor: "#068fa0",
    padding: " .20rem 0.8rem",
    color: "white",
    borderRadius: "15px",
  },
}));
