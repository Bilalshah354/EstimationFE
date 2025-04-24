import React from "react";
import "../styles/PlanSection.css";

const PlanSection = () => {
  return (
    <>
      <section className="report-section">
        <div className="overlay">
          <h1>
            WHAT DO YOU GET IN OUR{" "}
            <span className="plan-highlight">PRELIMINARY</span> ESTIMATE REPORT?
          </h1>
          <div className="report-items">
            <div className="item">
              <img src="/public/images/coins-01.png" alt="Cost Icon" className="icon" />
              <h3>COST BREAKDOWN</h3>
              <p>
                A spreadsheet detailing construction project costs as per master
                CSI format.
              </p>
            </div>
            <div className="divider"></div>
            <div className="item">
              <img src="/public/images/calendar-03.png" alt="Plans Icon" className="icon" />
              <h3>MARKED-UP PLANS</h3>
              <p>We mark up the provided drawings.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanSection;
