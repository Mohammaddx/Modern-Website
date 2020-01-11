import React from "react";
import Img from "../../images/background.jpg";
import "./style.css";

const PortfolioInfoComponent = ({ image, title, link }) => {
  return (
    <div className="portfolio-div">
      <div className="container">
        <img src={image} />
        <h2>{title}</h2>
        <a href={link} target="_blank">
          <span>Check Link!</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioInfoComponent;
