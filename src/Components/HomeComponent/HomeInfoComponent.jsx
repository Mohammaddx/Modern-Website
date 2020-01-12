import React from "react";
import SocialMediaComponenet from "./socialMediaComp";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyle } from "./style.jsx";

const HommeInfoComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Mohammad Ahmad</h1>
      <h2 className={classes.Typography}>Full stack Developer</h2>
    </div>
  );
};

export default HommeInfoComponent;
