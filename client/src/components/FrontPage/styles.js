import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    headline: {
        color: '#4057a0',
        fontWeight: '500',
        fontSize: '4.2rem'
    },
    subHead: {
        color: '#3a3368'
    },
    button: {
        color: '#fff',
        backgroundColor: '#1f90f4',
        marginTop: '20px',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#22adea',
        }
    }
}));