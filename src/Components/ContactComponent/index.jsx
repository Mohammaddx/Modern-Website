import React from "react";
import Image from "../.././images/svg3.svg";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SocialMediaComponenet from ".././HomeComponent/socialMediaComp";
import "./style.css";
import ReactWOW from "react-wow";
import "../../animate.css";

const ContactComponent = () => {
  return (
    <div className="contact">
      <div className="container">
        <ReactWOW animation="bounceIn">
          <div className="img-div">
            <img src={Image} alt="contact "/>
          </div>
        </ReactWOW>
        <div className="info-contact">
          <ReactWOW animation="fadeIn">
            <div className="connection">
              <EmailIcon /> <span> : ma3571318z@gmail.com</span>
            </div>
          </ReactWOW>

          <ReactWOW animation="fadeIn">
            <div className="connection">
              <PhoneInTalkIcon /> <span> : +(970) 592 839 122</span>
            </div>
          </ReactWOW>

          <ReactWOW animation="fadeIn">
            <div className="connection">
              <LocationOnIcon />
              <span> : Jenin, Palestine</span>
            </div>
          </ReactWOW>
        </div>
        <SocialMediaComponenet />
      </div>
    </div>
  );
};

export default ContactComponent;
