import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import { basicInfoData } from "../data/BasicInfoData";
import { directionsData } from "../data/DirectionsData";
import { SafetyAccessibility } from "../data/SafetyAccessibility";

import "./Plan.css";

const checkboxOptions = [
  { id: 1, label: "Basic Information", data: basicInfoData },
  { id: 2, label: "Directions & Transportation", data: directionsData },
  { id: 3, label: "Safety & Accessibility", data: SafetyAccessibility },
];

function Plan({ setPage, onThemeToggle, isDarkMode }) {
  // Initialize all checkboxes to true
  const CheckBoxes = {};
  checkboxOptions.forEach((option) => {
    CheckBoxes[option.id] = true;
  });

  const [checkbox, setCheckbox] = useState(CheckBoxes);

  // Setter to set any checkbox to opposite boolean value
  function handleCheckboxChange(id) {
    setCheckbox((prevCheckbox) => ({
      ...prevCheckbox,
      [id]: !prevCheckbox[id],
    }));
  };

  return (
    <div>
      <Header
        setPage={setPage}
        onThemeToggle={onThemeToggle}
        isDarkMode={isDarkMode}
      />

      <main id="main">
        <div className="main-wrapper">
          <h3 className="plan-title">Filter info</h3>
          <div className="checkbox-container">
            {checkboxOptions.map((option) => (
              <label className="checkbox-label" key={option.id}>
                <input
                  className="checkbox-input"
                  type="checkbox"
                  checked={checkbox[option.id]}
                  onChange={() => handleCheckboxChange(option.id)}
                  />
                  {option.label}
              </label>
            ))}
          </div>

          {checkboxOptions.map((option) => (
            <div key={option.id}>
              {checkbox[option.id] && (
                <>
                  <h3 className="plan-title">{option.label}</h3>
                  <Accordion data={option.data} />
                </>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Plan;
