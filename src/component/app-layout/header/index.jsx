import styles from './styles.module.css';
import BGLogo from '../../../assets/BG_LOGO.svg';
import Gems from '../../../assets/gems.png';
import Followers from '../../../assets/Followers.svg';

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src={BGLogo} alt="BG Logo" width={78.44} />
        <div className={styles.stat}>
          <div className={styles.followers}>
            <img src={Followers} alt="Followers" width={20} height={20} /> 5.1k
          </div>
          <div className={styles.gems}>
            <img src={Gems} alt="Gems" width={20} height={20} />
            1.2k
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
