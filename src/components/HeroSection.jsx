"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
    "/backgroundimage.jpg",
    "/backgroundimage2.jpg",
    "/backgroundimage3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <header className={styles.heroSection}>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeSlide ? styles.activeSlide : ""
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            Experience Luxury Like Never Before
          </h1>
          <p className={styles.heroSubtitle}>
            Where elegance meets comfort in the heart of paradise
          </p>
          <button className={styles.heroButton}>Book Your Stay</button>
        </div>
      </div>

      <button
        className={styles.sliderButton + " " + styles.prevButton}
        onClick={prevSlide}
      >
        <span className={styles.srOnly}>Previous</span>
        &larr;
      </button>
      <button
        className={styles.sliderButton + " " + styles.nextButton}
        onClick={nextSlide}
      >
        <span className={styles.srOnly}>Next</span>
        &rarr;
      </button>
    </header>
  );
}

export default HeroSection;
