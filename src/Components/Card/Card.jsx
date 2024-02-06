import CardImg from '../../assets/avatar-jessica.jpeg'
import Button from '../Button/Button';
import styles from './Card.module.css'

const Card = () => {
  return <div className={styles.Card}>
    <img className={styles.CardImg} src={CardImg} alt="Jessica Randall" />
    <div className={styles.Group}>
        <h3>Jessica Randall</h3>
        <p>London, United Kingdom</p>
    </div>
    <p className={styles.Position}>"Front-end developer and avid reader."</p>
    <div className={styles.BtnGroup}>
    <Button >GitHub</Button>
    <Button >Frontend Mentor</Button>
    <Button >Linkedin</Button>
    <Button >Twitter</Button>
    <Button >Instagram</Button>
    </div>
    
  </div>;
};
export default Card;