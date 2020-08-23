import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkIcon from "@material-ui/icons/Work";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ReactWOW from "react-wow";
import "../../../animate.css";
import "./style.css";

const SkillsInfoComponent = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} lg={3}>
          <ReactWOW animation="flipInY">
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
          </ReactWOW>
        </Grid>

        <Grid item xs={6} lg={3}>
          <ReactWOW animation="flipInY">
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
          </ReactWOW>
        </Grid>

        <Grid item xs={6} lg={3}>
          <ReactWOW animation="flipInY">
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
          </ReactWOW>
        </Grid>
        <Grid item xs={6} lg={3}>
          <ReactWOW animation="jello">
            <div className="cv-button">
              <a
                href="http://www.mediafire.com/file/knvwxqyhr8vd586/file"
                download="MohammadCVTull.pdf"
              >
                <button>Download CV</button>
              </a>
            </div>
          </ReactWOW>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsInfoComponent;
