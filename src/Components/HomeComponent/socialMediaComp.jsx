import React from "react";
import { useStyle } from "./style.jsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ReactWOW from "react-wow";
import "../../animate.css";

const SocialMediaComponenet = () => {
  const classes = useStyle();
  return (
    <div>
      <ReactWOW animation="rollIn">
        <a
          className={classes.item}
          href="https://www.facebook.com/profile.php?id=100013056635669"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="middle" style={{ color: "#fff" }} />
        </a>
      </ReactWOW>

      <ReactWOW animation="rollIn">
        <a
          className={classes.item}
          href="https://twitter.com/MoahmmadAhamd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="middle" style={{ color: "#fff" }} />
        </a>
      </ReactWOW>

      <ReactWOW animation="rollIn">
        <a
          className={classes.item}
          href="https://github.com/mohammad-dc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="middle" style={{ color: "#fff" }} />
        </a>
      </ReactWOW>
      <ReactWOW animation="rollIn">
        <a
          className={classes.item}
          href="https://www.linkedin.com/in/mohammad-ahmad-4b6a30175/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="middle" style={{ color: "#fff" }} />
        </a>
      </ReactWOW>

      <ReactWOW animation="rollIn">
        <a
          className={classes.item}
          href="https://www.instagram.com/python_now/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="middle" style={{ color: "#fff" }} />
        </a>
      </ReactWOW>
    </div>
  );
};

export default SocialMediaComponenet;
