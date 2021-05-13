import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  photo: {
    height: 200,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      height: 180,
      width: 180,
    },
    margin: "auto",
    borderRadius: 30,
  },
}));

function MyAvatar({ src }) {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.photo}>
      <img src={src} className={classes.photo} alt="Suvansh Rana" />
    </Paper>
  );
}

export default MyAvatar;
