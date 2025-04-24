import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <h1 className="hero-title">
            <span className="black">EXPERT</span>
            <span className="orange">CONSTRUCTION</span>
            <br />
            <span className="orange">ESTIMATING</span>
            <span className="black">SERVICES</span>
          </h1>
          <hr />
          <div className="subtext">
            <p className="subtext-1">
              ACCURATE, FAST, AND COST-EFFECTIVE ESTIMATES FOR YOUR PROJECTS
            </p>
            <span className="hero-arrow">
              <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
        <div className="right">
          <p className="description">
            ACCURATE COST ESTIMATES FOR RESIDENTIAL, COMMERCIAL, AND INDUSTRIAL
            PROJECTS—BUILT FOR CONFIDENT BIDDING.
          </p>
          <div className="award-box">
            <img
              src="/public/images/helmet.png"
              alt="Helmet"
              className="award-box-image"
            />
            <p className="award-box-text">
              <strong>
                AN AWARD
                <br />
                WINNING COMPANY.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
