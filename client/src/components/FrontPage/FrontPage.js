import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import HomeImg from "../../images/front page/Asset 1.png";
import { Link } from "react-router-dom";

const FrontPage = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Container>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid className={classes.gridItem} item sm={12} md={4}>
          <Typography className={classes.headline}>
            Think Less
            <br /> Sleep Better
            <br /> Be Happier
            <br />
          </Typography>
          {user ? (
            <Button component={Link} to="/quiz" className={classes.button} size="large" variant="contained">
              Start Now
            </Button>
          ) : (
            <Button component={Link} to="/auth" className={classes.button} size="large" variant="contained">
              Start Now
            </Button>
          )}
        </Grid>
        <Grid className={classes.gridImgItem} item sm={12} md={7}>
          <img src={HomeImg} alt="mental-wellness" className={classes.FrontPageImg} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default FrontPage;
