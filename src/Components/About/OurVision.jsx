import React from "react";
import "../styles/AboutStyle/OurVisionStyle.css";

const OurVision = () => {
  return (
    <section className="vision-section">
      <div className="vision-left">
        <div className="image-grid">
          <div className="vision-image-wrapper1">
            <img
              src="public/images/OurVision2.png"
              alt="Workers discussing plans"
            />
          </div>
          <div className="vision-image-wrapper">
            <img
              src="public/images/OurVision1.png"
              alt="Construction site work"
            />
          </div>
        </div>
        <div className="background-graphic"></div>
      </div>

      <div className="vision-right">
        <h2>
          OUR VISION AND
          <br />
          PHILOSOPHY
        </h2>
        <p>
          ABC Estimation & Construction is proud to offer our clients the
          expertise of our highly qualified construction estimators. With a
          specialization in professional material takeoff services, our team
          works closely with experienced quantity surveyors to ensure the
          success of commercial, residential, and industrial projects.
        </p>
        <a href="#" className="learn-more">
          Learn more.
        </a>
      </div>
    </section>
  );
};

export default OurVision;
