import React, { useEffect, useRef } from "react";
import "../styles/CounterSection.css";

const CounterSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const animateCounter = (el, target) => {
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;

      const countTo = parseInt(target, 10);
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(countTo * progress);

        if (progress >= 1) {
          clearInterval(counter);
          el.innerText = countTo;
        } else {
          el.innerText = currentCount;
        }
      }, 1000 / frameRate);
    };

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = sectionRef.current.querySelectorAll(".counter");
            counters.forEach((counter) => {
              if (!counter.classList.contains("counted")) {
                animateCounter(counter, counter.getAttribute("data-target"));
                counter.classList.add("counted");
              }
            });
            observerInstance.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <div className="counter-section" ref={sectionRef}>
      <div className="counter-box">
        <span className="counter" data-target="4960">
          0
        </span>
        +
        <span className="counter-label">
          Projects
          Completed
        </span>
      </div>
      <div className="line"></div>
      <div className="counter-box">
        <span className="counter" data-target="150">
          0
        </span>
        +
        <span className="counter-label">
          Happy 
          Clients
        </span>
      </div>
      <div className="line"></div>
      <div className="counter-box">
        <span className="counter" data-target="90">
          0
        </span>
        +
        <span className="counter-labell">
          Highly Qualified
          Estimators
        </span>
      </div>
    </div>
  );
};

export default CounterSection;
