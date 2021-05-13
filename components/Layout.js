import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import customTheme from "../customTheme";
import Head from "next/head";
import profileData from "../data/profileData";

function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="./favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#5c5236" />
        <meta name="theme-color" content="#212121" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {/* SEO and OG tags */}

        <title>{profileData.meta.title}</title>
        <meta name="description" content={profileData.about} />

        <meta name="robots" content="index, follow, noimageindex" />
        <meta name="keywords" content={profileData.meta.tags.join(", ")} />

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:title" content={profileData.meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@suvansh_rana_" />
        <meta name="twitter:description" content={profileData.about} />
        <meta name="twitter:creator" content="@suvansh_rana_" />
        <meta name="twitter:image" content={profileData.avatar} />
        <meta name="twitter:image:alt" content={profileData.about.name} />

        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content={profileData.meta.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={profileData.meta.url} />
        <meta property="og:image" content={profileData.avatar} />
        <meta property="og:description" content={profileData.about} />
        <meta property="og:site_name" content={profileData.meta.title} />
      </Head>

      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}

export default Layout;
