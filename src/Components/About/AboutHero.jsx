import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import "../styles/AboutStyle/AboutHeroStyle.css";

const AboutHero = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="image-about">
          <div className="image-bg"></div> 
          <img
            src="/public/images/AboutHero.png"
            alt="Construction Estimate"
            className="about-image"
          />
        </div>
        <div className="content-wrapper">
          <p className="subheading">ABOUT US</p>
          <h2 className="heading">
            BUILDING TRUST
            <br />
            WITH EVERY ESTIMATE
          </h2>
          <p className="about-description">
            At AS Estimation & Consultants, we bring precision, reliability, and
            decades of industry experience to the world of construction cost
            estimation. From residential builds to large-scale commercial
            projects, our mission is to simplify the estimating process—saving
            you time, reducing risk, and ensuring every project starts with a
            solid foundation.
          </p>
          <button className="about-explore-btn">
            EXPLORE SERVICES <RxArrowTopRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
