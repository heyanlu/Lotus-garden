import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import Activities from "./pages/Activities";
import Plan from "./pages/Plan";

import "./App.css";

function App() {
  // Manage pages
  const [page, setPage] = useState("Home");
  function currentPage(page) {
    setPage(page);
  }

  // Manage theme
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
  }, [isDarkMode]);

  function handleThemeToggle() {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      {page === "Home" && (
        <Home setPage={currentPage} onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      )}
      {page === "About" && (
        <About setPage={currentPage} onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      )}
      {page === "Attractions" && (
        <Attractions setPage={currentPage} onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      )}
      {page === "Activities" && (
        <Activities setPage={currentPage} onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      )}
      {page === "Plan" && (
        <Plan setPage={currentPage} onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      )}
    </>
  );
}

export default App;
