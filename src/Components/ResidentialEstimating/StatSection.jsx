import React, { useEffect, useRef, useState } from "react";
import "../styles/ResidentialStyle/StatSection.css";

const statsData = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 2545, suffix: "+", label: "Projects Completed" },
  { value: 97, suffix: "%", label: "Delivered Below Budget" },
  { value: 19, suffix: "M", label: "Total Manhours Employed" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000; // in ms
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = value / steps;

          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              start = value;
              clearInterval(counter);
            }
            setCount(Math.floor(start));
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <h3 ref={ref}>
      {count}
      {suffix}
    </h3>
  );
}

export default function StatSection() {
  return (
    <section className="stats">
      {statsData.map((stat, index) => (
        <div className="stat-item" key={index}>
          <Counter value={stat.value} suffix={stat.suffix} />
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
