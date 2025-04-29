import React from "react";
import "../styles/BeginSection.css";

const BeginSection = () => {
  return (
    <>
      <div className="begin-section">
        <div className="begin-left">
          <h1>
            HOW CAN I <span className="begin-highlight">BEGIN?</span>
          </h1>
          <p className="begin-description">
            Our specialized estimation services are highly regarded by leading
            builders and companies in the industry.
          </p>

          <div className="steps">
            <div className="step">
              <span className="begin-number">01</span>
              <p>SUBMIT YOUR PLANS</p>
            </div>

            <div className="step">
              <span className="begin-number">02</span>
              <p>WE WILL PROVIDE YOU WITH A QUOTE FOR OUR SERVICES.</p>
            </div>

            <div className="step">
              <span className="begin-number">03</span>
              <p>WE PROVIDE AND DELIVER YOUR COST ESTIMATE.</p>
            </div>
          </div>
        </div>

        <div className="begin-right">
          <img
            src="/public/images/3rd last.png"
            alt="Team discussion"
            className="team-image"
          />
          <div className="question-box">
            <p className="small-text">BUILDING EXCLUSIVELY FOR SPECIALISTS?</p>
            <h3>HAVE A QUESTION?</h3>
            <button className="begin-contact-button">GET IN TOUCH →</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeginSection;
