import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-panel" key={item.title}>
          <button
            className={`accordion-button ${
              activeIndex === index ? "open" : ""
            }`}
            onClick={() => toggleAccordion(index)}
            aria-label={`${item.title} tab ${
              activeIndex === index ? "open" : "close"
            }`}
          >
            <div className="accordion-title">{item.title}</div>
            <div className="accordion-toggle">
              {activeIndex === index ? "-" : "+"}
            </div>
          </button>

          {activeIndex === index ? (
            <div className={`accordion-text open`} key={index}>
              {item.content}
            </div>
          ) : (
            <div className={`accordion-text`} key={index}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
