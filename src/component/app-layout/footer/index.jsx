import styles from './styles.module.css';

import Ad from '../../../assets/ad.svg';
import Hot from '../../../assets/Hot.svg';
import Tools from '../../../assets/tools.svg';
import Shop from '../../../assets/shop.svg';
import Woman from '../../../assets/woman.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src={Hot} alt="Hot news" />
        <img src={Tools} alt="tools" />
        <img src={Ad} alt="Ads" />
        <img src={Shop} alt="Shopping bag" />
        <img src={Woman} alt="Profile" />
      </div>
    </div>
  );
};

export default Footer;
