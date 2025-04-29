import React from "react";
import "../styles/ContactUsStyle/ContactDetails.css";

const ContactDetails = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <div className="info-block">
          <h4>PHONE</h4>
          <p>+1 684 989 202</p>
        </div>
        <div className="info-block">
          <h4>EMAIL</h4>
          <p>estimatoconcrete.instal@gmail.com</p>
        </div>
        <div className="info-block">
          <h4>LOCATION</h4>
          <p>7300-7398 Colonial Rd, Brooklyn, NY 11209</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>SEND US A MESSAGE</h2>
        <form>
          <div className="form-row-half">
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
          </div>
          <div className="form-row-half">
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Service *" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Message *" required></textarea>
          </div>
          <div className="button-wrapper4">
            <button type="submit">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
