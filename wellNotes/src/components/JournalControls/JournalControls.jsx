import { useNavigate } from "react-router-dom";
import styles from "./JournalControls.module.css";

const JournalControls = () => {
  const navigate = useNavigate();

  const handleNewEntryClick = () => {
    navigate("/journal");
  };

  return (
    <div className={styles.journalControls}>
      <div className={styles.sortButtons}>
        <button className={styles.latestButton}>Latest</button>
        <button className={styles.oldestButton}>Oldest</button>
      </div>
      <button
        className={styles.postJournalButton}
        onClick={handleNewEntryClick}
      >
        New Entry
      </button>
    </div>
  );
};

export default JournalControls;
