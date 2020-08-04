import React from "react";
import ReactWOW from "react-wow";
import "../../animate.css";
import { useStyle } from "./style.jsx";

const HommeInfoComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <ReactWOW animation="bounceInUp">
        <h1 className={classes.h1}>Mohammad Ahmad</h1>
      </ReactWOW>
      <ReactWOW animation="fadeInUp">
        <h2 className={classes.Typography}>Full Stack Developer</h2>
      </ReactWOW>
    </div>
  );
};

export default HommeInfoComponent;
