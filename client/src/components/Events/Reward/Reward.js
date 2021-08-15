import React, { useEffect } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { questions } from "../../Quiz/qData";
import useStyles from "../Event/styles";

const Reward = ({ openFavoritePopup, setOpenFavoritePopup, event }) => {
  console.log("reward");
  const classes = useStyles();
  return (
    <Dialog open={openFavoritePopup} maxWidth="lg" classes={{ paper: classes.dialogWrapper }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <DialogTitle className={classes.dialogTitle} style={{ paddingTop: "0", paddingBottom: "0" }}>
            <div style={{ display: "flex" }}>
              <Typography variant="h5" component="h6" style={{ flexGrow: 1, display: "flex", alignItems: "center", textAlign: "center", fontWeight: "530" }}>
                Reward
              </Typography>
              <IconButton
                className={classes.root1}
                color="secondary"
                onClick={() => {
                  setOpenFavoritePopup(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent className={classes.dialogContent} dividers>
            <img className={classes.img} src={questions[2].answerOptions[event.reward - 1].ansImg} title={questions[2].answerOptions[event.reward - 1].answerText} />
          </DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Reward;
