"use client";
import React from "react";
import styles from "./LuxeStay.module.css";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import RoomsSection from "./RoomsSection";
import ServicesSection from "./ServicesSection";
import OffersSection from "./OffersSection";
import ReviewsSection from "./ReviewsSection";
import ContactForm from "./ContactForm"
import Footer from "./Footer";

function LuxeStay() {
  return (
    <div className={styles.container}>
      <Navigation />
      <HeroSection />
      <RoomsSection />
      <ServicesSection />
      <OffersSection />
      <ReviewsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default LuxeStay;
