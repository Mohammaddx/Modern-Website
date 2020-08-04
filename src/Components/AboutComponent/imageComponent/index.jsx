import React from "react";
import Image from "../../../images/b_me.png";
import "./style.css";
import ReactWOW from "react-wow";
import "../../../animate.css";

const ImageComponent = () => {
  return (
    <div className="root">
      <ReactWOW animation="flip">
        <span className="span-rolling"></span>
        <img src={Image} className="image-about" alt="mohammad"/>
      </ReactWOW>
    </div>
  );
};

export default ImageComponent;
