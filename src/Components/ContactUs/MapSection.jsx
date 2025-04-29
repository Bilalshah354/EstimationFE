import React from "react";
import "../styles/ContactUsStyle/MapSection.css";

const MapSection = () => {
  return (
    <>
      <iframe
        className="map"
        title="map"
        src="https://www.google.com/maps?q=New+York&output=embed"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </>
  );
};

export default MapSection;
