import styles from './styles.module.css';
import ChatRoom from './components/ChatRoom';

import User from '../../assets/user.svg';
import ChatIcon from '../../assets/chat.svg';
import AvailableSpace from '../../assets/image.png';

const Space = () => {
  let hh = new Date().getHours();
  const mm = new Date().getMinutes();
  let dd = 'AM';
  if (hh > 12) {
    hh -= 12;
    dd = 'PM';
  }
  return (
    <div className={styles.myspace}>
      <div className={styles.inviteSomeone}>
        <div className={styles.invite}>
          <img src={ChatIcon} alt="Chat bubble icon" />
          <img src={User} alt="User avatar" />
        </div>
        <p>Invite someone</p>
      </div>
      <div className={styles.ellipses}>
        {[...Array(7)].map((ellipse) => (
          <img
            src={AvailableSpace}
            alt="Available Space"
            key={ellipse}
            style={{ marginRight: 15 }}
          />
        ))}
      </div>
      <p className={styles.time}>
        TODAY {hh}:{mm} {dd}
      </p>
      <ChatRoom />
      <div style={{ height: 30 }} />
    </div>
  );
};

export default Space;
