import React, { useState } from "react";
import Header from "../Header/Header";
import { UserInfo, UserStats } from "../UserInfo/UserInfo";
/*import TokensEarned from '../TokensEarned/TokensEarned';
import CurrentStreak from '../CurrentStreak/CurrentStreak';*/
import JournalControls from "../JournalControls/JournalControls";
import JournalEntry from "../JournalEntry/JournalEntry";
import JournalGroup from "../JournalGroup/JournalGroup";
import Footer from "../Footer/Footer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const journalEntries = [
    {
      title: "Just a normal day thought",
      content:
        "I was going through my photo album and felt very sad after seeing my old friends photos. They aren't in contact now, hope they're good :)",
      timestamp: "3:14 pm 03/10/24",
    },
    {
      title: "Commit to myself",
      content: "I wanna finish my projects by sunday pakka, no more excuses!",
      timestamp: "3:14 pm 03/10/24",
    },
    {
      title: "Just a normal day thought",
      content:
        "I was going through my photo album and felt very sad after seeing my old friends photos. They aren't in contact now, hope they're good :)",
      timestamp: "3:14 pm 03/10/24",
    },
  ];

  const journalGroups = [
    {
      name: "Fitness Goal Gang",
      entryFee: 10,
      duration: 14,
      maxPlayers: 55,
      currentPlayers: 33,
    },
    {
      name: "Fitness Goal Gang",
      entryFee: 10,
      duration: 14,
      maxPlayers: 55,
      currentPlayers: 33,
    },
    {
      name: "Fitness Goal Gang",
      entryFee: 10,
      duration: 14,
      maxPlayers: 55,
      currentPlayers: 33,
    },
    {
      name: "Fitness Goal Gang",
      entryFee: 10,
      duration: 14,
      maxPlayers: 55,
      currentPlayers: 33,
    },
  ];

  return (
    <div
      className={
        isModalOpen
          ? `${styles.dashboard} ${styles.dashboardBlur}`
          : styles.dashboard
      }
    >
      <div className={styles.headerStyle}>
        <Header userName="Aditya" />

        <UserInfo
          userId="a51821"
          totalJournals="35"
          pointsEarn="427.44"
          currentStreaks="26"
        />
      </div>

      <main className={styles.mainContent}>
        <UserStats groupsWon="3" leaderboardRank="#3" />
        <section className={styles.journalSection}>
          <JournalControls />
          {journalEntries.map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </section>
        <section className={styles.groupsSection}>
          <h2 className={styles.groupsTitle}>Journal Groups</h2>
          {journalGroups.map((group, index) => (
            <JournalGroup key={index} {...group} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
