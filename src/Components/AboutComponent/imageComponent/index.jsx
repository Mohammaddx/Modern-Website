import React from "react";
import Image from "../../../images/b_me.png";
import "./style.css";

const ImageComponent = () => {
  return (
    <div className="root">
      <span className="span-rolling"></span>
      <img src={Image} className="image-about" />
    </div>
  );
};

export default ImageComponent;
