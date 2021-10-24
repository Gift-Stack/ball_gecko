import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import image from '../../assets/image.png';
import Image2 from '../../assets/image_2.png';
import Image3 from '../../assets/image_3.png';
import img from '../../assets/img.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

const Home = () => {
  const { push } = useHistory();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Active Spaces</h1>
      <div className={styles.spaces}>
        <span className={styles.space} onClick={() => push('/space')}>
          <img src={image} alt="user space" style={{ marginRight: 15 }} />
          <p>Mahbud's Space</p>
          <span className={styles.ellipse} />
        </span>
        <span className={styles.space} onClick={() => push('/space')}>
          <img src={Image2} alt="user space" style={{ marginRight: 15 }} />
          <p>Brandon’s Space</p>
          <span className={styles.ellipse} />
        </span>
        <span className={styles.space} onClick={() => push('/space')}>
          <img src={Image3} alt="user space" style={{ marginRight: 15 }} />
          <p>Solape’s Space</p>
          <span className={styles.ellipse} />
        </span>
        <span className={styles.space} onClick={() => push('/space')}>
          <img src={image} alt="user space" style={{ marginRight: 15 }} />
          <p>Mahbud's Space</p>
          <span className={styles.ellipse} />
        </span>
        <span className={styles.space} onClick={() => push('/space')}>
          <img src={Image2} alt="user space" style={{ marginRight: 15 }} />
          <p>Brandon’s Space</p>
          <span className={styles.ellipse} />
        </span>
        <span className={styles.space} onClick={() => push('/space')}>
          <img src={Image3} alt="user space" style={{ marginRight: 15 }} />
          <p>Solape’s Space</p>
          <span className={styles.ellipse} />
        </span>
      </div>
      <h1 className={styles.title}>Recent</h1>
      <div className={styles.ellipses}>
        {[...Array(12)].map((ellipse) => (
          <div key={ellipse} style={{ marginRight: 15 }} />
        ))}
      </div>
      <div className={styles.messages}>
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
      <div className={styles.messages}>
        <img src={img1} alt="Profile pic" />
        <div className={styles.message}>
          <div className={styles.st}>
            <div className={styles.nameTime}>
              <div className={styles.name}>Brandon</div>
              <div className={styles.time}>Tue</div>
            </div>
            <div className={styles.msg}>Will do, super, thank you </div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <img src={img2} alt="Profile pic" />
        <div className={styles.message}>
          <div className={styles.st}>
            <div className={styles.nameTime}>
              <div className={styles.name}>Solape</div>
              <div className={styles.time}>Sun</div>
            </div>
            <div className={styles.msg}>Uploaded a picture. </div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <img src={img3} alt="Profile pic" />
        <div className={styles.message}>
          <div className={styles.st}>
            <div className={styles.nameTime}>
              <div className={styles.name}>Marcel</div>
              <div className={styles.time}>23 Sep</div>
            </div>
            <div className={styles.msg}>
              Here is another post, if you like though. Btw, how you doing?
            </div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
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
      <div className={styles.messages}>
        <img src={img1} alt="Profile pic" />
        <div className={styles.message}>
          <div className={styles.st}>
            <div className={styles.nameTime}>
              <div className={styles.name}>Brandon</div>
              <div className={styles.time}>Tue</div>
            </div>
            <div className={styles.msg}>Will do, super, thank you </div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <img src={img2} alt="Profile pic" />
        <div className={styles.message}>
          <div className={styles.st}>
            <div className={styles.nameTime}>
              <div className={styles.name}>Solape</div>
              <div className={styles.time}>Sun</div>
            </div>
            <div className={styles.msg}>Uploaded a picture. </div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <img src={img3} alt="Profile pic" />
        <div className={styles.message}>
          <div className={styles.st}>
            <div className={styles.nameTime}>
              <div className={styles.name}>Marcel</div>
              <div className={styles.time}>23 Sep</div>
            </div>
            <div className={styles.msg}>
              Here is another post, if you like though. Btw, how you doing?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
