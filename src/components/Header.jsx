import React, { useState } from "react";

import Theme from "./Theme";
import Login from "./Login";

import "./Header.css";

function Header({ setPage, onThemeToggle, isDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const [username, setUsername] = useState("");

  function handleClick(action) {
    action === "toggle" && setShowMenu(!showMenu);
    action === "Home" && setPage("Home");
    action === "About" && setPage("About");
    action === "Attractions" && setPage("Attractions");
    action === "Activities" && setPage("Activities");
    action === "Plan" && setPage("Plan");
  }

  return (
    <header>
      <div className="header-wrapper">
        <a className="skip" href="#main">
          Skip to content
        </a>

        <div className="logo-container" >
          <img
            className="site-logo"
            src="./IMG_1122.jpg"
            alt="a close-up lotus with white pinkish color"
            onClick={() => handleClick("Home")}
          />
        </div>

        <button
          className={`menu-button ${showMenu ? "open" : ""}`}
          aria-label="menu-button"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className={showMenu ? "gg-close" : "gg-menu"}></i>
        </button>

        <nav className={`nav-bar ${showMenu ? "open" : ""}`}>
          <ul className="nav-menu">
            <li className="menu-item">
              <a
                className="menu-link"
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  handleClick("Home");
                }}
              >
                <hr className="header-linebreak" />
                <h2>Home</h2>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-link"
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  handleClick("About");
                }}
              >
                <hr className="header-linebreak" />
                <h2>About</h2>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-link"
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  handleClick("Attractions");
                }}
              >
                <hr className="header-linebreak" />
                <h2>Attractions</h2>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-link"
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  handleClick("Activities");
                }}
              >
                <hr className="header-linebreak" />
                <h2>Activities</h2>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-link"
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  handleClick("Plan");
                }}
              >
                <hr className="header-linebreak" />
                <h2>Plans</h2>
              </a>
            </li>
          </ul>

          <Theme onThemeToggle={onThemeToggle} isDarkMode={isDarkMode} />
          <div className="identification">
            <span>{username}</span>
            <Login username={username} setUsername={setUsername} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
