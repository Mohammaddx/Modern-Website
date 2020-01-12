import React from "react";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import "./style.css";
import ReactWOW from "react-wow";
import "../../../animate.css";
const ResumeInfo = ({ headline, date, subject }) => {
  return (
    <ReactWOW animation="slideInUp">
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
    </ReactWOW>
  );
};

export default ResumeInfo;
