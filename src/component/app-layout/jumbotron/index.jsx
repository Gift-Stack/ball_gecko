import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import Woman from '../../../assets/woman.png';

const Jumbotron = () => {
  const {
    location: { pathname }
  } = useHistory();
  return (
    <div className={styles.jumbotron}>
      <div>
        <p> {pathname === '/' ? 'Chat with friends in' : "Lase's space"}</p>
        <h1>{pathname === '/' ? 'Spaces' : 'Lukaku: King or Not?'}</h1>
      </div>
      <img src={Woman} alt="Woman DP" width={100} height={100} />
    </div>
  );
};

export default Jumbotron;
