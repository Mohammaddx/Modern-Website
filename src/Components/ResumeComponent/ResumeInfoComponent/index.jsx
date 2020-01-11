import React from "react";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import "./style.css";

const ResumeInfo = ({ headline, date, subject }) => {
  return (
    <div className="resume-div">
      <div>
        <h3>{headline}</h3>
        <span>
          <EventAvailableIcon style={{ marginRight: "5px" }} />
          {date}
        </span>
        <p>{subject}</p>
      </div>
    </div>
  );
};

export default ResumeInfo;
