import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Hidden,
} from "@material-ui/core";

import MyAvatar from "../components/MyAvatar";
import SocialLinkButton from "../components/SocialLinkButton";
import profileData from "../data/profileData";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${profileData.backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  profileContainer: {
    padding: "50px 0",
  },

  name: {
    color: "#fff",
    padding: "0 10px",
    textShadow: "0.5px 2px 2px #545454, 0 1px 3px #545454",
    letterSpacing: "0.5px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  about: {
    fontSize: "1.35em",
    color: "#fcfcfc",
    padding: "0 10px",
    marginTop: 10,
    textShadow: "0.5px 2px 2px #545454, 0 1px 3px #545454",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.15em",
    },
  },

  socialContainer: {
    marginTop: 10,
    padding: "0 10px",
  },

  centerOnSmallScreen: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
  },
}));

export default function ProfileSection({}) {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.background}>
      <Grid xs={12} item className={classes.profileContainer}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} className={classes.centerOnSmallScreen}>
              <Hidden mdUp={true}>
                <MyAvatar src={profileData.avatar} />
              </Hidden>
              <Typography variant="h2" className={classes.name}>
                {profileData.name}
              </Typography>

              <Typography
                variant="subtitle1"
                className={classes.about}
                component="p"
              >
                {profileData.about}
              </Typography>

              <div className={classes.socialContainer}>
                {profileData.links.map((linkData, index) => (
                  <SocialLinkButton
                    key={`social-link-button-${index}`}
                    {...linkData}
                  />
                ))}
              </div>
            </Grid>

            <Grid
              item
              container
              justify="center"
              xs={12}
              md={4}
              className={classes.centerOnSmallScreen}
            >
              <Hidden smDown={true}>
                <MyAvatar src={profileData.avatar} />
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
