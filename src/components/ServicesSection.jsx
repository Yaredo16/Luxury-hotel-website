import React from "react";
import styles from "./ServicesSection.module.css";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "24/7 Room Service",
      description:
        "Enjoy gourmet meals and drinks delivered to your room any time",
      icon: "/service1.jpg",
    },
    {
      id: 2,
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our premium spa treatments",
      icon: "/service2.jpg",
    },
    {
      id: 3,
      title: "Fine Dining",
      description: "Experience culinary excellence at our restaurants",
      icon: "/service3.jpg",
    },
    {
      id: 4,
      title: "Concierge",
      description: "Let our expert staff handle all your needs and requests",
      icon: "/service4.jpg",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.sectionTitle}>Our Premium Services</h2>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.id} className={styles.serviceCard}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles.serviceIcon}
              />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
