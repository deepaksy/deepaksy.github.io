import { Chip, makeStyles } from "@material-ui/core";
import React from "react";
import customTheme from "../customTheme";
import OuterLink from "./OuterLink";

const useStyles = makeStyles({
  skillIcon: { height: 18, width: 18, },
  skillChip: { margin: "4px 3px", },
});

function SkillChip({ name, SkillIcon, about_link }) {
  const classes = useStyles();

  return (
    <OuterLink link={about_link}>
      <Chip
        variant="outlined"
        avatar={
          <SkillIcon
            className={classes.skillIcon}
            color={customTheme.palette.primary.light}
          />
        }
        className={classes.skillChip}
        label={name}
        onClick={() => null}
      />
    </OuterLink>
  );
}

export default SkillChip;
