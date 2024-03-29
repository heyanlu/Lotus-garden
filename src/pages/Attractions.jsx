import React, { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Lotus from "./Lotus";
import GuoMansion from "./guoMansion";
import SuDi from "./suDi";

import "./Attractions.css";

function Attractions({ setPage, onThemeToggle, isDarkMode }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Header
        setPage={setPage}
        onThemeToggle={onThemeToggle}
        isDarkMode={isDarkMode}
      />
      <main id="main">
        <div className="main-wrapper">
          <div className="attractions-button-container">
            <button
              className={activeTab === 1 ? "tab-button active" : "tab-button"}
              aria-label="switch Lotus Garden"
              onClick={() => setActiveTab(1)}
            >
              Lotus Garden
            </button>
            <span className="tab-break">|</span>
            <button
              className={activeTab === 2 ? "tab-button active" : "tab-button"}
              aria-label="switch Guo Mansion"
              onClick={() => setActiveTab(2)}
            >
              Guo Mansion
            </button>
            <span className="tab-break">|</span>
            <button
              className={activeTab === 3 ? "tab-button active" : "tab-button"}
              aria-label="switch Su Di Causeway"
              onClick={() => setActiveTab(3)}
            >
              Su Di Causeway
            </button>
          </div>
          {activeTab === 1 && <Lotus />}
          {activeTab === 2 && <GuoMansion />}
          {activeTab === 3 && <SuDi />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Attractions;
