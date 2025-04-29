import React from "react";
import "../styles/ResidentialStyle/Client.css";

const testimonials = [
  {
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "public/images/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh mauris, nec turpis orci luctus rhoncus. Suspendisse sed magna eget nibh in turpis.",
  },
  {
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "public/images/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh mauris, nec turpis orci luctus rhoncus. Suspendisse sed magna eget nibh in turpis.",
  },
  {
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "public/images/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh mauris, nec turpis orci luctus rhoncus. Suspendisse sed magna eget nibh in turpis.",
  },
];

const Client = () => {
  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-heading">
        WHAT CLIENTS ARE SAYING <br />
        ABOUT US
      </h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-card testimonial-card-${index + 1}`}
            key={index}
          >
            <div
              className={`testimonial-bg-shape testimonial-bg-shape-${
                index + 1
              }`}
            ></div>
            <img
              src={testimonial.image}
              alt="avatar"
              className="testimonial-avatar"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Client;
