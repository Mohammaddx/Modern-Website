import React from "react";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../progressBar/index";

import "./style.css";

const SkillsComponenet = () => {
  return (
    <div className="progress-container">
      <Grid container>
        <Grid item xs={6} lg={3}>
          <ProgressBar percent="95" text="html + css" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProgressBar percent="90" text="JavaScript" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProgressBar percent="90" text="React js" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProgressBar percent="80" text="Asp core" />
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsComponenet;
