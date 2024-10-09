
import styles from './UserInfo.module.css';

const StatItem = ({ label, value }) => (
  <div className={styles.statItem}>
    <div className={styles.statLabel}>{label}</div>
    <div className={styles.statValue}>{value}</div>
  </div>
);

export const UserInfo = ({ userId, totalJournals, pointsEarn, currentStreaks }) => (
  <section className={styles.userInfo}>
    <StatItem label="User ID" value={userId} />
    <StatItem label="Total Journals" value={totalJournals} />
    <StatItem label="Points Earned" value={pointsEarn} />
    <StatItem label="Current Streaks" value={currentStreaks} />
  </section>
);

export const UserStats = ({ groupsWon,leaderboardRank }) => (
  <section className={styles.userStats}>
    <StatItem label="Groups Won" value={groupsWon} />
    <StatItem label="Leaderboard Rank" value={leaderboardRank} />
  </section>
);

