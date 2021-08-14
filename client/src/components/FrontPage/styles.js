import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
    },
    gridItem: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    gridImgItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        color: '#068fa0',
        fontWeight: '500',
        fontSize: '4.2rem'
    },
    subHead: {
        color: '#3a3368'
    },
    button: {
        color: '#fff',
        backgroundColor: '#ff5050',
        marginTop: '20px',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#cc5050',
        }
    },
    FrontPageImg: {
        height: '85%',
        width: '85%'
    }
}));