import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import "../styles/ResidentialStyle/OurServices.css";

export default function OurServices() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>YOUR ULTIMATE RESIDENTIAL ESTIMATING SERVICES</h2>
        <button className="cta-button">
          Explore Our Portfolio <CgArrowTopRight />
        </button>
      </div>
      <div className="hero-image">
        <div className="hero-image__frame">
          <img src="/images/OurServices.jpg.png" alt="Construction Tools" />
        </div>
      </div>
    </section>
  );
}
