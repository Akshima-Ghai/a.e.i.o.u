import { Typography, AppBar, Toolbar, Avatar, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import { LOGOUT } from "../../constants/actionTypes";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        // if expiry time in millisecs is less than current time in millisecs
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.mainContainer}>
        {user ? (
          <Typography component={Link} to="/home" className={classes.heading} variant="h4" align="center">
            aeiou
          </Typography>
        ) : (
          <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">
            aeiou
          </Typography>
        )}
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Button variant="contained" className={classes.loginButton} onClick={logout}>
              Log Out
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" className={classes.loginButton} variant="contained">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
