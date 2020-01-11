import React from "react";
import { useStyle } from "./style.jsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const SocialMediaComponenet = () => {
  const classes = useStyle();
  return (
    <div>
      <a
        className={classes.item}
        href="https://www.facebook.com/profile.php?id=100013056635669"
        target="_blank"
      >
        <FacebookIcon fontSize="middle" style={{ color: "#fff" }} />
      </a>

      <a
        className={classes.item}
        href="https://twitter.com/MoahmmadAhamd"
        target="_blank"
      >
        <TwitterIcon fontSize="middle" style={{ color: "#fff" }} />
      </a>

      <a
        className={classes.item}
        href="https://github.com/Mohammaddx"
        target="_blank"
      >
        <GitHubIcon fontSize="middle" style={{ color: "#fff" }} />
      </a>
      <a
        className={classes.item}
        href="https://www.linkedin.com/in/mohammad-ahmad-4b6a30175/"
        target="_blank"
      >
        <LinkedInIcon fontSize="middle" style={{ color: "#fff" }} />
      </a>

      <a
        className={classes.item}
        href="https://www.instagram.com/mohammadahmad2871/"
        target="_blank"
      >
        <InstagramIcon fontSize="middle" style={{ color: "#fff" }} />
      </a>
    </div>
  );
};

export default SocialMediaComponenet;
/*
<div style={{ border: "1px solid #fff" }}>
      <ul className={classes.list} style={{ border: "1px solid #fff" }}>
        <li className={classes.item} style={{ border: "1px solid #fff" }}>
          <a
            href="https://www.facebook.com/profile.php?id=100013056635669"
            target="_blank"
          >
            <FacebookIcon fontSize="large" style={{ color: "#fff" }} />
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://twitter.com/MoahmmadAhamd" target="_blank">
            <TwitterIcon fontSize="large" style={{ color: "#fff" }} />
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://github.com/Mohammaddx" target="_blank">
            <GitHubIcon fontSize="large" style={{ color: "#fff" }} />
          </a>
        </li>
        <li className={classes.item}>
          <a
            href="https://www.linkedin.com/in/mohammad-ahmad-4b6a30175/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" style={{ color: "#fff" }} />
          </a>
        </li>
        <li className={classes.item}>
          <a
            href="https://www.instagram.com/mohammadahmad2871/"
            target="_blank"
          >
            <InstagramIcon fontSize="large" style={{ color: "#fff" }} />
          </a>
        </li>
      </ul>
    </div> */
