import React from "react";
import { LuMoveUpRight } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import "../styles/ServicesSection.css";


const ServicesSection = () => {
  return (
    <>
      <div className="services">
        <div className="left-section">
          <p className="section-label">• SERVICES</p>
          <h1>
            WE PROVIDING
            <br />
            <span className="service-highlight">
              CONSTRUCTION
              <br />
              ESTIMATING
            </span>{" "}
            SERVICES
            <br />
            TO OUR CLIENTS
          </h1>
          <a href="#" className="btn">
            EXPLORE SERVICES <LuMoveUpRight />

          </a>
        </div>

        <div className="right-section">
          <div className="service-item">
            <div className="service-header">
              <span className="index">01</span>
              <span className="service-title">RESIDENTIAL ESTIMATING</span>
              <span className="arrow"><MdArrowRightAlt /></span>
            </div>
            <div className="service-details">
              <img
                src="\public/images/residential estimating.png"
                alt="Residential Estimating"
              />
              <div>
                <p>
                  Accurate cost estimates for residential, commercial, and
                  industrial projects—built for confident bidding.
                </p>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-header">
              <span className="index">02</span>
              <span className="service-title">COMMERCIAL ESTIMATING</span>
              <span className="arrow"><LuMoveUpRight />
              </span>
            </div>
          </div>

          <div className="service-item">
            <div className="service-header">
              <span className="index">03</span>
              <span className="service-title">INDUSTRIAL ESTIMATING</span>
              <span className="arrow"><LuMoveUpRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
