import React from "react";
import "../styles/AboutStyle/AboutCards.css";

const data = [
  {
    id: 1,
    image: "public/images/Cards.png",
    name: "KAMAL ABRAHAM & CO.",
    title: "COMMERCIAL SUBCONTRACTOR",
  },
  {
    id: 2,
    image: "public/images/Cards.png",
    name: "KAMAL ABRAHAM & CO.",
    title: "COMMERCIAL SUBCONTRACTOR",
  },
  {
    id: 3,
    image: "public/images/Cards.png",
    name: "KAMAL ABRAHAM & CO.",
    title: "COMMERCIAL SUBCONTRACTOR",
  },
  {
    id: 4,
    image: "public/images/Cards.png",
    name: "KAMAL ABRAHAM & CO.",
    title: "COMMERCIAL SUBCONTRACTOR",
  },
];

const ExperiencedSubcontractor = () => {
  return (
    <div className="subcontractor-section">
      <h2 className="subcontractor-title">
        EXPERIENCED
        <br />
        SUBCONTRACTOR
      </h2>
      <div className="subcontractor-container">
        {data.map((item) => (
          <div className="subcontractor-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="subcontractor-img"
            />
            <div className="subcontractor-content">
              <div className="subb">
                <h3>{item.name}</h3>
                <p>{item.title}</p>
              </div>
              <div className="button-group">
                <button>Linkedin</button>
                <button>IN</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencedSubcontractor;
