import "./Theme.css";

function Theme({ onThemeToggle, isDarkMode }) {
  return (
    <div className="theme-control">
      <input
        className="theme-toggler"
        aria-label={isDarkMode? "dark-theme" : "light-theme"}
        id="theme"
        type="checkbox"
        checked={isDarkMode}
        onChange={onThemeToggle}
      />
      <label htmlFor="theme" className="theme-text">Theme</label>
    </div>
  );
}

export default Theme;
