
import styles from './Header.module.css';

const Header = ({ userName }) => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <div className={styles.logo}>Well</div>
      <div className={styles.logoAccent}>notes</div>
    </div>
    <div className={styles.userContainer}>
      <div className={styles.userInfo}>
        <div className={styles.greeting}>
          <div className={styles.greetingText}>Hey there</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a1f56084382d0ef965dc1542798879b466413b2afb5612b6c4e10dce3485aad?placeholderIfAbsent=true&apiKey=f60e8421c5e240dc9ddb1595646237d5" alt="" className={styles.greetingIcon} />
        </div>
        <div className={styles.userName}>{userName}</div>
      </div>
      <img loading="lazy" src="src/assets/userPhoto.png" alt="User avatar" className={styles.userAvatar} />
    </div>
    
  </header>
);

export default Header;
