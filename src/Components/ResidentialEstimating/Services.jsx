import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import "../styles/ResidentialStyle/Services.css";

const estimationServices = [
  {
    title: "CONCRETE",
    description:
      "Accurate cost estimates for residential, commercial, and industrial projects—built for confident bidding.",
    image: "public/images/residential estimating.png"
  },
  { title: "MASONRY" },
  { title: "METAL" },
  { title: "THERMAL AND MOISTURE" },
  { title: "OPENINGS" },
  { title: "FINISHES" },
  { title: "PLUMBING" },
  { title: "HVAC ESTIMATES" },
  { title: "ELECTRICAL" },
  { title: "EARTHWORK" },
  { title: "CIVIL/SITEWORKS/LANDSCAPING" },
  { title: "WOOD, PLASTIC AND COMP." }
];

const ResidentialEstimation = () => {
  return (
    <div className="estimation-container">
      <div className="estimation-sidebar">
        <h2 className="estimation-heading">
          SERVICES WE<br />
          PROVIDING IN<br />
          <span className="estimation-highlight">RESIDENTIAL</span>{" "}
          <span className="estimation-normal">ESTIMATION</span>
          <span className="estimation-subtext">(For Subcontractors)</span>
        </h2>
        <button className="estimation-button">REQUEST A SAMPLE</button>
      </div>

      <div className="estimation-accordion">
        {estimationServices.map((service, index) => (
          <div className="estimation-accordion-item" key={index}>
            <div className="estimation-accordion-header">
              <div className="estimation-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="estimation-title">{service.title}</div>
              <div className="estimation-icon">
                <CgArrowTopRight />
              </div>
            </div>

            {service.description && (
              <div className="estimation-accordion-body">
                {service.image && (
                  <img
                    src={service.image}
                    alt="illustration"
                    className="estimation-image"
                  />
                )}
                <p>{service.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentialEstimation;
