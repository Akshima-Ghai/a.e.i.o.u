import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quiz: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    optionsGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    option: {
        marginBottom: '0.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    media: {
        height: 140,
    },
}))