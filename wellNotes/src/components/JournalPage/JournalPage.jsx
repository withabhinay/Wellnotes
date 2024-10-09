import styles from "./JournalPage.module.css";
import Header from "../Header/Header";
import { UserInfo } from "../UserInfo/UserInfo";
import Footer from "../Footer/Footer";

export default function JournalPage() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <Header userName="Aditya" />
        <UserInfo
          userId="a51821"
          totalJournals="35"
          pointsEarn="427.44"
          currentStreaks="26"
        />
      </div>
      {/* <div className={styles.mainArea}> */}
      <div className={styles.writeArea}>
        <h2>What's on your mind today?</h2>
        <input type="text" className={styles.title} placeholder="Title" />
        <textarea
          name="body"
          id="body"
          className={styles.body}
          placeholder="How was your day today?.."
        ></textarea>
        <button className={styles.saveJournalButton}>Save Journal</button>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}
