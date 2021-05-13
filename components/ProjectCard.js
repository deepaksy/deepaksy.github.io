import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Chip, Grid } from "@material-ui/core";
import OuterLink from "./OuterLink";
import Margin from "./Margin";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
  media: {
    objectFit: "contain",
    height: 210,
    backgroundColor: "#2b2b2b",
  },
  button: {
    padding: 10,
    letterSpacing: 0.45,
  },
  cardAction: {
    padding: "10px 15px",
  },
  tagChip: {
    margin: "4px 3px",
    lineHeight: 1.9,
  },
});

export default function ProjectCard({
  name,
  description,
  coverImage,
  tags,
  projectLink,
  githubLink,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="140"
        image={coverImage}
        className={classes.media}
        alt={name}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>

        <Margin />

        <div>
          {tags.map((tag, index) => (
            <Chip
              key={`tag-chip-${index}`}
              className={classes.tagChip}
              size="small"
              label={tag}
              variant="outlined"
              component="span"
            />
          ))}
        </div>
        <Margin />

        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Grid container justify="flex-end">
          <Grid item>
            <OuterLink link={githubLink}>
              <Button
                className={classes.button}
                size="small"
                color="primary"
              >
                Github
              </Button>
            </OuterLink>
          </Grid>

          <Grid item>
            <OuterLink link={projectLink}>
              <Button
                size="small"
                color="primary"
                className={classes.button}
              >
                Project
              </Button>
            </OuterLink>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
