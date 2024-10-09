
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Well</span>
          <span className={styles.logoAccent}>notes</span>
        </div>
        <p className={styles.tagline}>
          Its time to incentivise your thoughts and build productive wellbeing.
          <br />
          Copyright © 2024 - All rights reserved
        </p>
      </div>
      <nav className={styles.footerNav}>
        <h4 className={styles.navTitle}>LINKS</h4>
        <ul className={styles.navList}>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#leaderboard">Leaderboard</a></li>
          <li><a href="#whitepaper">Whitepaper</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
        <button className={styles.joinButton}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b7040abfa0221d1d6f959f05cf14b8f11071a2d79d08554beaf53660c8669bf?placeholderIfAbsent=true&apiKey=f60e8421c5e240dc9ddb1595646237d5" alt="" className={styles.joinIcon} />
          <span>Join us</span>
        </button>
      </nav>
      <nav className={styles.legalNav}>
        <h4 className={styles.navTitle}>LEGAL</h4>
        <ul className={styles.navList}>
          <li><a href="#terms">Terms of services</a></li>
          <li><a href="#privacy">Privacy policy</a></li>
          <li><a href="#licenses">Licenses</a></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;