import React, { useEffect } from "react";
import { useStyle } from "./style.jsx";
import hoverEffect from "hover-effect";
import Img1 from "../../images/image1.png";
import Img2 from "../../images/image2.png";
import Imgdis from "../../images/heightMap.png";
import ReactWOW from "react-wow";
import "../../animate.css";

const HomeImagesComponent = () => {
  const classes = useStyle();
  useEffect(() => {
    const effect = () => {
      new hoverEffect({
        parent: document.getElementById("image-div"),
        intensity: 0.2,
        image1: `${Img1}`,
        image2: `${Img2}`,
        speedIn: 2,
        speedOut: 5,

        displacementImage: `${Imgdis}`
      });
    };

    effect();
  }, []);

  return (
    <ReactWOW animation="zoomIn">
      <div id="image-div" className={classes.imgDiv}></div>
    </ReactWOW>
  );
};

export default HomeImagesComponent;
