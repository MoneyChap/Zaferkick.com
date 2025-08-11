// EventCard.jsx
import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";

export default function EventCard({ header, img, title, summary, date, link }) {
    return (
        <article className={styles.featuredEvent}>
            <div className={styles.eventHeader}>{header}</div>

            <div className={styles.flexContainer}>
                <div className={styles.eventImg}>
                    <img src={img} alt={title} draggable={false} />
                </div>

                <div className={styles.eventDescriptionContainer}>
                    <div className={styles.eventDescription}>
                        <h1 className={styles.eventTitle}>{title}</h1>
                        <p className={styles.eventSummary}>{summary}</p>
                    </div>
                    <div className={styles.eventLinkContainer}>
                        <p>PUBLISHED {date}</p>
                        <Link className={styles.eventLink} to={link}>READ NOW!</Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
