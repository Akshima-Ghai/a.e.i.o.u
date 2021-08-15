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
  heroContainer:{
    display:"flex",
    width:"80%",
    margin:"0 auto",
    justifyContent:"space-evenly"
  },
  heroItemContainer:{
    boxShadow:"0 1rem 2rem rgba(0,0,0,.2)",
    padding:".5rem 1.75rem",
    textAlign:"center",
    borderRadius:"20px"
  },
  heroItemHead:{
    color:"#222222",
  },
  heroItemSpan:{
    color:"#3f51b5"
  },
  heroItemScore:{
    color:"#3f51b5"
  }
}));
