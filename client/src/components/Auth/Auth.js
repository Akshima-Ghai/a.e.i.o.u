import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup, signin } from '../../actions/auth';
import Input from './Input';
import useStyles from './styles';
import Icon from './Icon';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const Auth = () => {

    const googleClientId = process.env.REACT_APP_APP_ID;
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => setShowPassword((prevValue) => (!prevValue));

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //if res exists, then give res.profileObj otherwise it will show error cannot get value of undefined but in this way it will give result as undefined
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/home/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (err) => {
        console.log(err);
        console.log('Google Sign in Failed. Try again later');
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && (
                                <>
                                    <Input name="confirmPassword" label="Repeat Passsword" handleChange={handleChange} type="password" />
                                </>
                            )
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#068fa0', color: '#fff' }} className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId={googleClientId}
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                style={{ backgroundColor: '#068fa0', color: '#fff' }}
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end" >
                        <Grid item>
                            <Button onClick={switchMode} style={{ color: '#fa5a66' }}>
                                {
                                    isSignup ?
                                        'Already have an account? Sign In' :
                                        "Don't have an account? Sign Up"
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;