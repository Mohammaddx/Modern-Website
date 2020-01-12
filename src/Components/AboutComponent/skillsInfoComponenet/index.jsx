import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkIcon from "@material-ui/icons/Work";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import "./style.css";

const SkillsInfoComponent = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} lg={3}>
          <div className="containerSkillsInfo">
            <div className="icon-div">
              <WorkIcon color="secondary" className="icon" fontSize="large" />
            </div>
            <div className="info">
              <div className="title">
                <h3>4 years Job</h3>
              </div>
              <div className="status">
                <span>Experience</span>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={6} lg={3}>
          <div className="containerSkillsInfo">
            <div className="icon-div">
              <CheckCircleIcon
                color="secondary"
                className="icon"
                fontSize="large"
              />
            </div>
            <div className="info">
              <div className="title">
                <h3>+111 Projects</h3>
              </div>
              <div className="status">
                <span>Completed</span>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={6} lg={3}>
          <div className="containerSkillsInfo">
            <div className="icon-div">
              <AccountCircleIcon
                color="secondary"
                className="icon"
                fontSize="large"
              />
            </div>
            <div className="info">
              <div className="title">
                <h3>Freelance</h3>
              </div>
              <div className="status">
                <span>Available</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} lg={3}>
          <di className="cv-button">
            <a>
              <button> Download CV</button>
            </a>
          </di>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsInfoComponent;
