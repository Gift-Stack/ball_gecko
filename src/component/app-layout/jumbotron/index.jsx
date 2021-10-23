import styles from './styles.module.css';
import Woman from '../../../assets/woman.png';

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div>
        <p>Chat with friends in</p>
        <h1>Spaces</h1>
      </div>
      <img src={Woman} alt="Woman DP" width={100} height={100} />
    </div>
  );
};

export default Jumbotron;
