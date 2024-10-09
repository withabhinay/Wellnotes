import React, { useState } from 'react';
import styles from './JournalGroup.module.css';

const JournalGroup = ({ name, entryFee, duration, maxPlayers, currentPlayers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className={styles.journalGroup}>
        <div className={styles.groupHeader}>
          <h3 className={styles.groupName}>{name}</h3>
          <button className={styles.joinButton} onClick={handleJoinClick}>Join</button>
        </div>
        <div className={styles.groupDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Entry Fee</span>
            <span className={styles.detailValue}>{entryFee} $NOTE</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Duration</span>
            <span className={styles.detailValue}>{duration} Days</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Max Players</span>
            <span className={styles.detailValue}>{maxPlayers}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Current Players</span>
            <span className={styles.detailValue}>{currentPlayers}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>YAY! You discovered something!</h2><br />
            <p>The feature to collaborate with your friends and gamify your writing journey is available soon.</p>
            <button className={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default JournalGroup;
