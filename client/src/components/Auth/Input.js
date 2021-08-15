import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ half, name, label, handleChange, type, autoFocus, handleShowPassword }) => {

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                type={type}
                autoFocus={autoFocus}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            />
        </Grid>
    );
}

export default Input;