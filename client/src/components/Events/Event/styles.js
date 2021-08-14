import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
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
  apply: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
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
    borderRadius: "0.5rem",
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
    color: "white",
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
