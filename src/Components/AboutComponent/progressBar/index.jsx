import React from "react";
import "./style.css";

const ProgressBar = ({ percent, text }) => {
  return (
    <div className="container-progress">
      <div className="percent">
        <svg>
          <circle cx="50" cy="50" r="50"></circle>
          <circle
            cx="50"
            cy="50"
            r="50"
            style={{ strokeDashoffset: `calc(330 - (330 * ${percent}) / 100)` }}
          ></circle>
        </svg>
        <div className="number">
          <h2>
            {percent}
            <span>%</span>
          </h2>
        </div>
      </div>
      <h2 className="text">{text}</h2>
    </div>
  );
};

export default ProgressBar;
