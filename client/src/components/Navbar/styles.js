import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 0,
        height: "4rem",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#fff",
    },
    image: {
        paddingRight: "10px",
        height: "1.7rem",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            width: "auto",
        },
    },
    title: {
        fontSize: "2rem",
        fontWeight: "500",
        color: "#0062ff",
        textDecoration: "none !important",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none !important",
    },
}));