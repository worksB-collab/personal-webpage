import styles from '../Card.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.contentContainer}>
                <a href={props.companySite}
                   target='_blank'
                   className={styles.title}>{props.title}</a>
                <p className={styles.company}>{props.company}</p>
                <p className={styles.location}>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    {` ${props.location}`}
                </p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;