import React from "react";
import HomeImagesComponent from "../Components/HomeComponent/HomeImagesComponent";
import Grid from "@material-ui/core/Grid";
import HomeInfoComponent from "../Components/HomeComponent/HomeInfoComponent";
import { useStyle } from ".././Styles/HomeStyle";
export const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container className={classes.root}>
        <div style={{ padding: "50px" }}>
          <Grid item xs={12} className={classes.leftGrid}>
            <HomeImagesComponent />
          </Grid>
          <Grid item xs={12}>
            <HomeInfoComponent />
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
