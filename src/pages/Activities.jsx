import Header from "../components/Header";
import Footer from "../components/Footer";

import { activities } from "../data/ActivitiesData";

import "./Activities.css";

function Activities({ setPage, onThemeToggle, isDarkMode }) {
  return (
    <>
      <Header
        setPage={setPage}
        onThemeToggle={onThemeToggle}
        isDarkMode={isDarkMode}
      />
      <main id="main">
        <div className="main-wrapper">
          {activities.map((activity) => (
            <div key={activity.imageFile} className="activities-wrapper">
              <div className="activities-image-container">
                <img
                  className="activities-image"
                  src={activity.imageFile}
                  alt={activity.alt}
                />
              </div>

              <div className="activities-text-container">
                <h3 className="activities-title">{activity.title}</h3>
                {activity.text}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Activities;
