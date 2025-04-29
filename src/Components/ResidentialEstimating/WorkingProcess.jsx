import React from "react";
import "../styles/ResidentialStyle/WorkingProcess.css";
import engineerImg from "../../../public/images/image (2).png";
import buildingImg from "../../../public/images/image (1).png";

const WorkingProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-left">
          <h2 className="process-heading">OUR WORKING PROCESS</h2>

          <div className="process-steps">
            <div className="step active">
              <span className="step-number">01</span>
              <div className="step-details">
                <h4 className="step-light">INITIAL CONSULTATION</h4>
                <p>
                  Every project begins with a thorough consultation. We take the
                  time to understand your specific needs, project scope, and
                  objectives. This allows us to tailor our services to meet your
                  unique requirements.
                </p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <div className="step-details">
                <h4 className="step-title">DETAILED ANALYSIS</h4>
              </div>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <div className="step-details">
                <h4 className="step-title">ESTIMATION AND REVIEW</h4>
              </div>
            </div>
            <div className="step">
              <span className="step-number">04</span>
              <div className="step-details">
                <h4 className="step-title">FINAL DELIVERY</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="process-right">
          <div className="process-description">
            <p className="delivery-heading">
              How We Deliver{" "}
              <span className="working-highlight">
                Accurate Residential Estimates?
              </span>
            </p>
            <p className="delivery-text">
              Our process is designed to deliver accurate and reliable estimates
              that you can trust. Here's how we do it:
            </p>
          </div>

          <div className="process-images">
            <div className="right-column">
              <img src={engineerImg} alt="Engineer" className="image2" />
              <div className="contact-circle">CONTACT US</div>
            </div>
            <div className="left-column">
              <img
                src={buildingImg}
                alt="Building under construction"
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
