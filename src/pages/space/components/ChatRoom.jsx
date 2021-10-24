import styles from '../styles.module.css';
import SendIcon from '../../../assets/sendIcon.svg';
import Camera from '../../../assets/camera.svg';
import Smiley from '../../../assets/smiley.svg';
import Lukaku from '../../../assets/lukaku.png';

const ChatRoom = () => {
  const handleSubmit = (e) => {};
  return (
    <div className={styles.room}>
      <div className={styles.container}>
        <div className={styles.other}>
          <div className={styles.bubble}>
            <p>Anybody here loving Lukaku’s form?</p>
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.bubble}>
            <p>
              He is in terrible form, @halods hope say you bet on top this guy?
            </p>
          </div>
        </div>
        <div className={styles.other}>
          <img src={Lukaku} alt="Sent attachment" />
        </div>
        <div className={styles.other}>
          <div className={styles.bubble}>
            <p>Peep my GOAT’s jubilation style! Dope stuff!!!</p>
          </div>
        </div>
        <div className={styles.me}>
          <div className={styles.bubble}>
            <p>Hello everybody, I'm Folake</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="chat" placeholder="Leave a comment" />
        <div className={styles.icons}>
          <img src={Smiley} alt="Smiley" />
          <img src={Camera} alt="Camera" />
          <img src={SendIcon} alt="SendIcon" />
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
