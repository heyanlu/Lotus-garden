import Carousel from "./Carousel";
import Header from "./Header";
import Signup from "./Signup";

import { cardData } from "../data/CardData";
import { carouselData } from "../data/CarouselData";

import "./Cards.css";

function Cards({ setPage, onThemeToggle, isDarkMode }) {
  return (
    <main id="main">
      <div className="hero-wrapper">
        <img
          className="hero-image"
          src="./DSCF9279.jpg"
          alt="closed up pink lotus brilliantly blossomed on a blurred backdrop of classical Chinese garden"
        />
        <h1 className="hero-text">Chinese Garden at Its Best</h1>
      </div>
      <Header
        setPage={setPage}
        onThemeToggle={onThemeToggle}
        isDarkMode={isDarkMode}
      />

      <div className="hero-CAT-container">
        <div className="hero-CAT-text">
          {" "}
          <Signup /> to our newsletter!{" "}
        </div>
      </div>

      <div className="main-wrapper">
        <div className="section-container">
          <h3 className="section-title">Featured</h3>
          <Carousel data={carouselData} />
        </div>

        <div className="section-container">
          <h3 className="section-title">Top Activities</h3>
          <div className="cards">
            {cardData.map((card) => (
              <div key={card.imageFile} className="card">
                <img
                  className="card-image"
                  src={card.imageFile}
                  alt={card.alt}
                />
                {card.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cards;
