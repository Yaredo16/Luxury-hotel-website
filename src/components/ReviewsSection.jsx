import React from "react";
import styles from "./ReviewsSection.module.css";

function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      location: "New York, USA",
      avatar: "/review1.jpg",
      text: '"Absolutely amazing experience. The service was impeccable and the amenities were top-notch."',
    },
    {
      id: 2,
      name: "Emma Wilson",
      location: "London, UK",
      avatar: "/review2.jpg",
      text: '"The perfect luxury retreat. Every detail was carefully thought out. Will definitely return!"',
    },
    {
      id: 3,
      name: "David Chen",
      location: "Singapore",
      avatar: "/review3.jpg",
      text: '"Outstanding hospitality and beautiful accommodations. A truly memorable stay."',
    },
  ];

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        <h2 className={styles.sectionTitle}>Guest Reviews</h2>

        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className={styles.reviewAvatar}
                />
                <div className={styles.reviewAuthor}>
                  <h4 className={styles.reviewName}>{review.name}</h4>
                  <p className={styles.reviewLocation}>{review.location}</p>
                </div>
              </div>
              <p className={styles.reviewText}>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
