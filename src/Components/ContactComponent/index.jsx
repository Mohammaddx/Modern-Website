import React from "react";
import Image from "../.././images/svg3.svg";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SocialMediaComponenet from ".././HomeComponent/socialMediaComp";
import "./style.css";

const ContactComponent = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="img-div">
          <img src={Image} />
        </div>
        <div className="info-contact">
          <div className="connection">
            <EmailIcon /> <span> : ma3571318z@gmail.com</span>
          </div>

          <div className="connection">
            <PhoneInTalkIcon /> <span> : +(970) 592 839 122</span>
          </div>

          <div className="connection">
            <LocationOnIcon />
            <span> : Jenin, Palestine</span>
          </div>
        </div>
        <SocialMediaComponenet />
      </div>
    </div>
  );
};

export default ContactComponent;
