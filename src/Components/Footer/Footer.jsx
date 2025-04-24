import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-main">
          <div className="footer-left">
            <div class="footer-title">
              <h1 class="footer-heading">
                <span class="white-text">WHAT</span>
                <br />
                <span class="orange-text">WE DO</span>
              </h1>
            </div>

            <div className="footer-address">
              <h4>ADDRESS</h4>
              <p>
                5919 xxxxxxx xxxxx,
                <br />
                Birmingham
              </p>
              <p className="phone">+2 456 (343) 24 45</p>
              <p className="email">info@.com</p>
            </div>
          </div>

          <div className="footer-right">
            <div className="circle-button">CONTACT US</div>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=New+York&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © Copyright 2025 | AS Estimation & Consultants LLC |<br /> All
            rights reserved.
          </p>
          <div className="social-icons">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
