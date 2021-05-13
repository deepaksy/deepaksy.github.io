import { Container, Hidden, Typography } from "@material-ui/core";
import AppBottomNavigation from "../components/AppBottomNavigation";
import Copyright from "../components/Copyright";
import Margin from "../components/Margin";
import BlogSection from "../sections/BlogSection";
import DomainSection from "../sections/DomainSection";
import ProfileSection from "../sections/ProfileSection";
import ProjectSection from "../sections/ProjectSection";

import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@suvansh_rana"
  );

  const blogsData = await res.json();

  return {
    props: {
      blogsData,
    },
    revalidate: 60 * 60 * 12,
  };
}

function App({ blogsData }) {
  return (
    <>
      <Head>
     
      </Head>

      <div className="App">
        <div id="about">
          <ProfileSection />
        </div>
        <Container>
          <Margin count={2} />

          <div id="skills">
            <Typography variant="h4">Skills</Typography>
            <Margin />
            <DomainSection />
          </div>

          <Margin count={2} />

          <div id="projects">
            <Typography variant="h4">Projects</Typography>
            <Margin />
            <ProjectSection />
          </div>

          <Margin count={2} />

        </Container>
        <Copyright />

        <Hidden mdUp>
          <Margin count={4} />
          <AppBottomNavigation />
        </Hidden>
      </div>
    </>
  );
}

export default App;
