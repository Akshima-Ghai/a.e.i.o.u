import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  img: {
    maxWidth: "25vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40vw",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
      maxWidth: "75vw",
    },
  },
  border: {
    border: "solid",
  },
  icons: {
    marginLeft: "auto !important",
    [theme.breakpoints.down(350)]: {
      marginRight: "auto",
    },
  },
  applyBtn: {
    marginLeft: "0.5rem !important",
    [theme.breakpoints.down(350)]: {
      marginLeft: "auto",
      marginBottom: "0.5rem",
    },
  },
  icons: {
    marginLeft: "auto !important",
    [theme.breakpoints.down(350)]: {
      marginRight: "auto",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  applyCompleted: {
    transform: "rotate(0deg)",
    marginRight: "1rem",
    marginTop: "5px",
    textTransform: "none",
    color: "#068fa0",
    borderRadius: 15,
    borderColor: "#068fa0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vmin",
    },
  },
  applyCancelled: {
    transform: "rotate(0deg)",
    marginRight: "1rem",
    marginTop: "5px",
    textTransform: "none",
    color: "#cc5050",
    borderRadius: 15,
    borderColor: "#cc5050",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vmin",
    },
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "0rem",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "0px",
    right: "0px",
    color: "#0a4849",
  },
  grid: {
    display: "flex",
  },
  cardActions: {
    display: "flex",
    alignItems: "right",
    paddingRight: "0.5rem",
    [theme.breakpoints.down(350)]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
    color: "inherit",
  },
  cardContent: {
    width: "100%",
    padding: "0.5rem 1rem 0",
  },
}));
