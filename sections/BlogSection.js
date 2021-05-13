import React from "react";
import {
  Container,
  Grid,
} from "@material-ui/core";
import BlogCard from "../components/BlogCard";


export default function BlogSection({ blogsData }) {

  return (
    <Container>
      <Grid container justify="center" spacing={3}>
        {blogsData.items.map((blogData, index) => (
          <Grid item key={`blog-card-${index}`}>
            <BlogCard {...blogData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
