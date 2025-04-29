import React from "react";
import "../styles/SoftwareweUse.css";

const SoftwareweUse = () => {
  return (
    <div className="software-section">
      <div className="software-heading">
        <h1 className="software-text">
          <span>SOFTWARE</span> WE USE
        </h1>
      </div>
      <div className="software-linee"></div>
      <div className="software-vertical-line"></div>
      <div className="software-image-row">
        <img
          className="software-img"
          src="/public/images/logo1.png"
          alt="Bluebeam"
        />
        <img
          className="software-img"
          src="/public/images/logo2.png"
          alt="PlanSwift"
        />
        <img
          className="software-img"
          src="/public/images/logo3.png"
          alt="On-Screen Takeoff"
        />
      </div>
    </div>
  );
};

export default SoftwareweUse;
