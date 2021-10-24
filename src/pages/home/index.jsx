import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import image from '../../assets/image.png';
import img from '../../assets/img.png';

const Home = () => {
  const { push } = useHistory();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Active Spaces</h1>
      <div className={styles.spaces}>
        {[...Array(16)].map((space) => (
          <span
            key={space}
            className={styles.space}
            onClick={() => push('/space')}
          >
            <img src={image} alt="user space" style={{ marginRight: 15 }} />
            <p>Mahbud's Space</p>
            <span className={styles.ellipse} />
          </span>
        ))}
      </div>
      <h1 className={styles.title}>Recent</h1>
      <div className={styles.ellipses}>
        {[...Array(12)].map((ellipse) => (
          <div key={ellipse} style={{ marginRight: 15 }} />
        ))}
      </div>
      {[...Array(6)].map((key) => (
        <div key={key} className={styles.messages}>
          <img src={img} alt="Profile pic" />
          <div className={styles.message}>
            <div className={styles.st}>
              <div className={styles.nameTime}>
                <div className={styles.name}>Folake</div>
                <div className={styles.time}>08:43</div>
              </div>
              <div className={styles.msg}>Hello everybody! I’m Folake.</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
