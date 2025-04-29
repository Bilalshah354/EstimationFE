import React from "react";
import "../styles/ContactUsStyle/ContactHero.css";

const ContactHero = () => {
  return (
    <div className="contact-hero">
      <div className="contact-left">
        <p className="contact-subtitle">CONTACT US</p>
        <h1 className="contact-title">
          GET IN TOUCH WITH
          <br />
          AS ESTIMATION &<br />
          CONSULTANTS
        </h1>
      </div>
      <div className="contact-right">
        <p className="contact-description">
          At AS Estimation & Consultants LLC Interiors
          <br />
          We're always open for a chat, so get in touch
          <br />
          to find out how we can help.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
