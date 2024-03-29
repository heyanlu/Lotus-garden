import React, { useState } from "react";

import "./Carousel.css";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img
          className="carousel-image"
          src={data[currentIndex].imageFile}
          alt={data[currentIndex].alt}
        />
      </div>
      <div className="carousel-text-container">
        <p className="carousel-text">{data[currentIndex].text}</p>
      </div>
      <div className="carousel-button-container">
        <button className="carousel-button" aria-label="button-previous-photo" onClick={goToPrevSlide}>
          Prev
        </button>
        <button className="carousel-button" aria-label="button-next-photo" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
