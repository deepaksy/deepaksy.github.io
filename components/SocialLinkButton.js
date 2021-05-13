import { Fab, makeStyles } from "@material-ui/core";
import React from "react";
import OuterLink from "./OuterLink";

const useStyles = makeStyles({
  fab: {
    margin: 5,
  },
});

function SocialLinkButton({ icon, link }) {
  const classes = useStyles();

  return (
    <OuterLink link={link}>
      <Fab color="primary" size="medium" className={classes.fab} elevation={5}>
        {icon}
      </Fab>
    </OuterLink>
  );
}

export default SocialLinkButton;
