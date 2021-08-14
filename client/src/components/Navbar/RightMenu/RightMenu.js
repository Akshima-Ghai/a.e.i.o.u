import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Menu, MenuItem, ListItemIcon, ListItemText, Button, IconButton, Avatar } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";

import { LOGOUT } from "../../../constants/actionTypes";
import useStyles from "./styles";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const RightMenu = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push("/");
        setAnchorEl(null);
        setUser(null);
    };
    const signIn = () => {
        history.push("/auth");
    };
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile"))); // eslint-disable-next-line
    }, [location]);

    return (
        <>
            {user ? (
                <>
                    <IconButton className={classes.icon} aria-controls="customized-menu" aria-haspopup="true" variant="contained" onClick={handleClick}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} color="primary">
                            {user.result.name.charAt(0).toUpperCase()}
                        </Avatar>
                    </IconButton>
                    <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem>
                            <ListItemIcon>
                                <AccountCircleIcon style={{ color: "#0062ff" }} fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={user.result.name} />
                        </MenuItem>
                        <MenuItem className={classes.button} button onClick={logout}>
                            <ListItemIcon>
                                <PowerSettingsNewIcon style={{ color: "#0062ff" }} fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </MenuItem>
                    </StyledMenu>
                </>
            ) : (
                <div>
                    <Button className={classes.signInBtn} variant="contained" onClick={signIn}>
                        Sign in
                    </Button>
                </div>
            )}
        </>
    );
};
export default RightMenu;