import { useState } from 'react';
import { Typography, AppBar, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.mainContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center" >
                    aeiou
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Button variant="contained" className={classes.loginButton} onClick={logout}>Log Out</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" className={classes.loginButton} variant="contained">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;