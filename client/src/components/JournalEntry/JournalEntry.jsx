
import styles from './JournalEntry.module.css';

const JournalEntry = ({ title, content, timestamp }) => (
  <article className={styles.journalEntry}>
    <h3 className={styles.entryTitle}>{title}</h3>
    <p className={styles.entryContent}>{content}</p>
    <time className={styles.entryTimestamp}>{timestamp}</time>
  </article>
);

export default JournalEntry;