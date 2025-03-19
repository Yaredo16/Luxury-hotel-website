"use client";
import React, { useState } from "react";
import styles from "./RoomsSection.module.css";

function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: 299,
      image: "/room1.jpg",
      description: "Luxurious suite with ocean view",
    },
    {
      id: 2,
      name: "Presidential Suite",
      price: 599,
      image: "/room2.jpg",
      description: "Ultimate luxury experience",
    },
    {
      id: 3,
      name: "Garden Villa",
      price: 399,
      image: "/room3.jpg",
      description: "Private villa with garden",
    },
  ];

  const selectRoom = (room) => {
    setSelectedRoom(room);
  };

  return (
    <section className={styles.roomsSection}>
      <div className={styles.roomsContainer}>
        <h2 className={styles.sectionTitle}>Our Luxurious Rooms</h2>

        <div className={styles.roomsGrid}>
          {rooms.map((room) => (
            <article
              key={room.id}
              className={styles.roomCard}
              onClick={() => selectRoom(room)}
            >
              <div className={styles.roomImageContainer}>
                <img
                  src={room.image}
                  alt={room.name}
                  className={styles.roomImage}
                />
              </div>
              <div className={styles.roomContent}>
                <h3 className={styles.roomName}>{room.name}</h3>
                <p className={styles.roomDescription}>{room.description}</p>
                <div className={styles.roomPrice}>
                  <span className={styles.price}>${room.price}</span>
                  <span className={styles.perNight}>per night</span>
                </div>
                <button className={styles.bookButton}>Book Now</button>
              </div>
            </article>
          ))}
        </div>

        {selectedRoom && (
          <div className={styles.roomModal}>
            <div className={styles.modalContent}>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedRoom(null)}
              >
                ×
              </button>
              <h3 className={styles.modalTitle}>{selectedRoom.name}</h3>
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className={styles.modalImage}
              />
              <p className={styles.modalDescription}>
                {selectedRoom.description}
              </p>
              <p className={styles.modalPrice}>
                ${selectedRoom.price} per night
              </p>
              <div className={styles.modalActions}>
                <button className={styles.modalBookButton}>Book Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RoomsSection;
