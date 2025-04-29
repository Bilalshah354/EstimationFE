import React from "react";
import "../styles/ResidentialStyle/WhyChooseUs.css";

const WhyChooseSection = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-left">
          <h2 className="why-heading">
            WHY CHOOSE AS ESTIMATION AND CONSULTANTS
          </h2>
        </div>
        <div className="why-right">
          <p className="why-text">
            Choosing the right partner for your residential estimating needs is
            a crucial step in ensuring the success of your construction project.
            At AS Estimation and Consultants, we stand out as a trusted leader
            for several compelling reasons.
          </p>
          <ul className="why-list">
            <li>
              <span className="highlight">• Expertise and Experience</span>
            </li>
            <li>
              <span className="highlight">• Cutting-Edge Technology</span>
            </li>
            <li>
              <span className="highlight">• Online Accessibility</span>
            </li>
            <li>
              <span className="highlight">• Personalized Service</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
