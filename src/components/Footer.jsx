import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerLogo}>Utopia Luxury Hotel</h3>
            <p className={styles.footerText}>
              Where luxury meets comfort in the heart of paradise.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="https://example.com" className={styles.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="https://example.com" className={styles.footerLink}>
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="https://example.com" className={styles.footerLink}>
                  Dining
                </a>
              </li>
              <li>
                <a href="https://example.com" className={styles.footerLink}>
                  Spa & Wellness
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}>123 Utopia Lane</li>
              <li className={styles.footerLink}>Paradise City, ET 12345</li>
              <li className={styles.footerLink}>+251 (---) 123-456</li>
              <li className={styles.footerLink}>info@utopialuxuryhotel.com</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" className={styles.socialLink}>
                Facebook
              </a>
              <a href="https://instagram.com" className={styles.socialLink}>
                Instagram
              </a>
              <a href="https://twitter.com" className={styles.socialLink}>
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Utopia Luxury Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
