import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        boxShadow: '5px 5px 10px 0px #9e9feb',
        marginBottom: '5rem'
    },
    loginButton: {
        backgroundColor: '#1f90f4',
        color: '#fff',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#22adea',
        },
        marginLeft: 15
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    heading: {
        color: '#3551a7',
        textDecoration: 'none'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px'
    },
    profile: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText('#1f90f4'),
        backgroundColor: '#1f90f4',
    },
}));