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
    textTransform: "none",
    color: "#024649",
    borderRadius: 15,
    borderColor: "#cdf6f8",
    backgroundColor: "#cdf6f8",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      backgroundColor: "#cdf6e8",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vmin",
    },
    fontWeight: "600",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  applyCancelled: {
    transform: "rotate(0deg)",
    marginRight: "1rem",
    textTransform: "none",
    color: "#ff0500",
    borderRadius: 15,
    borderColor: "#ffdadb",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vmin",
    },
    backgroundColor: "#ffdadb",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#fcdacb",
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
    top: "5px",
    right: "0px",
    color: "#0a4849",
  },
  grid: {
    display: "flex",
  },
  cardActions: {
    display: "flex",
    alignItems: "right",
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
    padding: "0.5rem 0",
  },
}));
