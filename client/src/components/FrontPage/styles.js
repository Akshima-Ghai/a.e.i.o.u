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
        color: '#0a4849',
        fontWeight: '500',
        fontSize: '4.2rem',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '2.5rem',
        },
    },
    subHead: {
        color: '#3a3368'
    },
    button: {
        color: '#fff',
        backgroundColor: '#068fa0',
        marginTop: '20px',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#468fa0',
        }
    },
    FrontPageImg: {
        height: '85%',
        width: '85%'
    }
}));