import React from "react";
import "../styles/AboutStyle/AboutStats.css";

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="about-stats-left">
        <h1 className="stats-heading">
          CREATING TIMELESS
          <br />
          SPACES WITH PASSION
          <br />
          SINCE 2010
        </h1>
        <div className="timeline">
          {[
            {
              year: "2010",
              title: "FOUNDED",
              desc: "This Company was established by Jane Doe, starting small boutique firm.",
            },
            {
              year: "2012",
              title: "FIRST MAJOR PROJECT",
              desc: "Blaar Interiors was established by Jane Doe, starting Edmonton area.",
            },
            {
              year: "2016",
              title: "INDUSTRY RECOGNITION",
              desc: "This Company was established by Jane Doe, starting small boutique firm.",
            },
            {
              year: "2019",
              title: "AWARD-WINNING DESIGNS",
              desc: "This Company was established by Jane Doe, starting small boutique firm.",
            },
            {
              year: "2024",
              title: "CONTINUED GROWTH",
              desc: "This Company was established by Jane Doe, starting small boutique firm.",
            },
          ].map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-stats-right">
        <div className="stats-grid">
          <div className="stat-box">
            <h2>15+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h2>2545+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h2>97%</h2>
            <p>Delivered Below Budget</p>
          </div>
          <div className="stat-box">
            <h2>19M</h2>
            <p>Total Manhours Employed</p>
          </div>
        </div>
        <button className="connect-button">LET'S CONNECT →</button>

        <div className="stats-background-graphic">
          <img src="public/images/AboutBG.png" alt="Error" />
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
