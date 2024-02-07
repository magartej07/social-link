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
    <Button href="https://github.com/" >GitHub</Button>
    <Button href="https://www.frontendmentor.io/">Frontend Mentor</Button>
    <Button href="https://np.linkedin.com/">Linkedin</Button>
    <Button href="https://twitter.com/?lang=en">Twitter</Button>
    <Button href="https://www.instagram.com/">Instagram</Button>
    </div>
    
  </div>;
};
export default Card;