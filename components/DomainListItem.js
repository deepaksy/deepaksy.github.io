import React from "react";

import {
  Paper,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
} from "@material-ui/core";

import customTheme from "../customTheme";
import SkillChip from "./SkillChip";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
    [theme.breakpoints.down("xs")]: {
      minWidth: 310,
    },
  },
  avatar: { backgroundColor: customTheme.palette.primary.main },
  chipsContainer: { marginTop: 17 },
  listItemPrimaryText: {
    fontSize: "1.4em",
  },
}));

export default function DomainListItem({ name, icon, skills }) {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{icon}</Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={name}
          primaryTypographyProps={{ className: classes.listItemPrimaryText }}
          secondaryTypographyProps={{component: "div"}}
          secondary={
            <div className={classes.chipsContainer}>
              {skills.map((skillData, index) => (
                <SkillChip key={`skill-chip-${index}`} {...skillData} />
              ))}
            </div>
          }
        />
      </ListItem>
    </Paper>
  );
}
