import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "0",
    color: "white",
    loading: {
      marginLeft: "20px",
    },
  },
  noPosts: {
    padding: "1rem",
    color: "#068fa0",
    display: "flex",
    height: "30vh",
    justifyContent: "center",
  },
  loading: {
    display: "flex",
    color: "#068fa0",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "0rem",
    position: "relative",
  },
  cardContent: {
    width: "100%",
    padding: "0.5rem 1rem 0",
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    border: "1px solid #068fa0",
  },
}));
