import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

function ProjectSection() {
  return (
    <Container>
      <Grid container justify="center" spacing={3}>
        {projectData.map((_projectData, index) => (
          <Grid item key={`project-card-${index}`}>
            <ProjectCard {..._projectData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectSection;
