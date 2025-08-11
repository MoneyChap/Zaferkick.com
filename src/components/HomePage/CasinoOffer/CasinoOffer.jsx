import React from "react"
import { Link } from "react-router-dom";
import styles from "./CasinoOffer.module.css";
import firstOffer from "../../../assets/CasinoJoy_370x150.jpg";


const CasinoOffer = (props) => {
    return (
        <div className={styles.offerItem}>
            <div className={styles.offerImg}>
                <img src={firstOffer} alt="pic" />
            </div>
            <div className={styles.offerDetailsContainer}>
                <div className={styles.offerDetails}>
                    <div className={styles.spinsContainer}>
                        <p>SPINS</p>
                        <div>
                            400
                        </div>
                    </div>
                    <div className={styles.bonusContainer}>
                        <p>BONUS</p>
                        <div>
                            225% / $2000
                        </div>
                    </div>
                    <div className={styles.linkBtn}>
                        <Link to="/">
                            GO
                        </Link>
                    </div>
                </div>
                <div className={styles.reviewContainer}>
                    <Link to="/">Read The Review</Link>
                </div>
            </div>
        </div>
    )
};

export default CasinoOffer;
