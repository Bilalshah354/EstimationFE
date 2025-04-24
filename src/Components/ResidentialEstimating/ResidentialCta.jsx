import React from 'react';
import '../styles/ResidentialStyle/residentialCta.css';
import { CgArrowTopRight } from "react-icons/cg";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <h2 className="cta-heading">READY TO START YOUR RESIDENTIAL PROJECT?</h2>
        <button className="cta-button">
          GET ESTIMATE RATE <span className="arrow"> <CgArrowTopRight /></span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;