import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageComponent from "../Components/AboutComponent/imageComponent/index";
import InfoComponent from "../Components/AboutComponent/infocomponent/index";
import SkillsComponent from "../Components/AboutComponent/skillsComponent/index";
import SkillsInfoComponenet from "../Components/AboutComponent/skillsInfoComponenet/index";
import Footer from "../Components/AboutComponent/footer/index";
import Title from "react-vanilla-tilt";
import { useStyle } from "../../src/Styles/AboutStyle";

export const About = () => {
  const classes = useStyle();
  return (
    <div>
      <Title
        style={{
          width: "90%",
          margin: "auto",
          position: "relative",
          top: "70px"
        }}
      >
        <div>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <ImageComponent />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <InfoComponent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <SkillsComponent />
            </Grid>
            <Grid item xs={12}>
              <SkillsInfoComponenet />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </div>
      </Title>
    </div>
  );
};
