import styles from "./LandingPage.module.css";
import Footer from "../Footer/Footer";
import Faq from "../Faq/Faq";

export default function LandingPage() {
  return (
    <div className={styles.background}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>Well</div>
          <div className={styles.logoAccent}>notes</div>
        </div>

        <ul className={styles.navlist}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <button className={styles.launchAppButton}>Launch App</button>
      </nav>

      <div className={styles.betaContainer}>
        <p>Beta version is live</p>
      </div>

      <div className={styles.heroSectionText}>
        <h1>Get Paid to Build Your Productive Wellbeing with Wellnotes</h1>
        <p>
          Write, journal, and compete with friends while building social <br />
          accountability + earning rewards
        </p>
      </div>
      <div className={styles.heroSectionImage}>
        <img src="/src/assets/dashboard1.png" alt="dashboard" />
      </div>
      <div className={styles.features}>
        <h1>How it Works</h1>
        <div className={styles.ftrContainer}>
          <div className={styles.imageBox}>
            <img src="src/assets/card-1.svg" alt="" />
          </div>
          <div className={styles.desc}>
            <h2>
              Journal Your Thoughts &rarr; Better <br /> Clarity &rarr; More
              Productive
            </h2>
            <p>
              Simply Pen down your thoughts quick and easy with a click, and{" "}
              <br />
              feel refreshed. Also all the journals will be kept private <br />
              initially, and made public only with your consent!
            </p>
          </div>
        </div>
        <div className={styles.ftrContainer}>
          <div
            className={styles.desc}
            style={{ textAlign: "right", marginRight: "20px" }}
          >
            <h2>
              Get rewarded with points, and simply <br />
              Cash out into Real $$
            </h2>
            <p>
              We’ve daily, weekly, and goal oriented rewards/challenges <br />{" "}
              which after completing gets you respective points that <br />
              once collected can be traded with real $${" "}
            </p>
          </div>
          <div className={styles.imageBox}>
            <img src="src/assets/card-2.svg" alt="" />
          </div>
        </div>
        <div className={styles.ftrContainer}>
          <div className={styles.imageBox}>
            <img src="src/assets/card-3.svg" alt="" />
          </div>
          <div className={styles.desc}>
            <h2>
              Join or Create Groups to be more <br />
              accountable towards your productivity
            </h2>
            <p>
              Pool in some tokens for joining, and if you build more <br />
              consistency in journaling than others, get the respective <br />
              pre-defined prize pool.
            </p>
          </div>
        </div>
        <h4 style={{ textDecoration: "underline" }}>
          ... and many more features!
        </h4>
      </div>

      <Faq />
      <Footer />
    </div>
  );
}
