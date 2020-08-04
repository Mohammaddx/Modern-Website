import React from "react";
import "./style.css";
import ReactWOW from "react-wow";
import "../../animate.css";
const PortfolioInfoComponent = ({ image, title, link }) => {
  return (
    <ReactWOW animation="jackInTheBox">
      <div className="portfolio-div">
        <div className="container">
          <img src={image} alt="project"/>
          <h2>{title}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>Check Link!</span>
          </a>
        </div>
      </div>
    </ReactWOW>
  );
};

export default PortfolioInfoComponent;
