import React from "react";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../progressBar/index";
import ReactWOW from "react-wow";
import "../../../animate.css";
import "./style.css";

const SkillsComponenet = () => {
  return (
    <div className="progress-container">
      <Grid container>
        <Grid item xs={6} lg={3}>
          <ReactWOW animation="slideInUp">
            <ProgressBar percent="95" text="html + css" />
          </ReactWOW>
        </Grid>
        <Grid item xs={6} lg={3}>
          <ReactWOW animation="slideInDown">
            <ProgressBar percent="90" text="JavaScript" />
          </ReactWOW>
        </Grid>
        <Grid item xs={6} lg={3}>
          <ReactWOW animation="slideInLeft">
            <ProgressBar percent="90" text="React js" />
          </ReactWOW>
        </Grid>
        <Grid item xs={6} lg={3}>
          <ReactWOW animation="slideInRight">
            <ProgressBar percent="80" text="Asp core" />
          </ReactWOW>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsComponenet;
