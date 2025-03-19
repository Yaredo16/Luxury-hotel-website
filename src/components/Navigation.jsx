"use client";
import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>Utopia Luxury Hotel</div>
          <div className={styles.desktopMenu}>
          
            <a href="https://example.com" className={styles.navLink}>
                Explore our world of hospitality!!
            </a>
           
          </div>
        </div>
      </nav>

   

    </>
  );
}

export default Navigation;
