import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import HomeImg from "../../images/home_page.png";
import { Link } from "react-router-dom";

const FrontPage = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.gridContainer} spacing={3}>
                <Grid
                    className={classes.gridItem}
                    item
                    sm={12}
                    md={6}
                >
                    <Typography className={classes.headline}>
                        Think Less<br /> Sleep Better<br /> Be Happier<br />
                    </Typography>
                    <Button component={Link} to="/auth" className={classes.button} size="large" variant="contained">
                        Start Now
                    </Button>
                </Grid>
                <Grid className={classes.gridItem} item sm={12} md={5}>
                    <img src={HomeImg} alt="A girl on phone" />
                </Grid>
            </Grid>
        </Container>
    );
};
export default FrontPage;
