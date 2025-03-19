import React from "react";
import styles from "./OffersSection.module.css";

function OffersSection() {
  const offers = [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "20% off on weekend stays + complimentary breakfast",
    },
    {
      id: 2,
      title: "Honeymoon Package",
      description: "Special romantic package with spa treatments and dining",
    },
  ];

  return (
    <section className={styles.offersSection}>
      <div className={styles.offersContainer}>
        <h2 className={styles.sectionTitle}>Special Offers</h2>

        <div className={styles.offersGrid}>
          {offers.map((offer) => (
            <article key={offer.id} className={styles.offerCard}>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDescription}>{offer.description}</p>
              <button className={styles.offerButton}>Learn More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
