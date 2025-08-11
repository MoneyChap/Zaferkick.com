import React from "react";
import styles from "./TopCasinos.module.css";
import { Link } from "react-router-dom";
import secondOffer from "../../../assets/EWU_WebBanner25_EN.jpg";

const TopCasinos = (props) => {
    return (
        <div className={styles.latestCasinoContainer}>
            <Link className={styles.latestCasino}>
                <img src={secondOffer} alt="pic" />
                <h1>Template Casino</h1>
                <p className={styles.latestCasinoSummary}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nulla, officiis dolore dicta error rerum unde esse alias, aliquid ad voluptatum dolores labore fugiat, placeat aspernatur adipisci sit temporibus mollitia?
                </p>
                <p className={styles.latestCasinoLink}>READ NOW -D</p>
            </Link>
            <div className={styles.topCasino}>
                <h1 className={styles.topCasinoHeader}>#TOP CASINOS</h1>
                <div className={styles.topCasinoList}>
                    <Link className={styles.topCasinoItem}>
                        <div className={styles.topCasinoText}>
                            <h1 className={styles.topCasinoNumber}>#1</h1>
                            <h2 className={styles.topCasinoTitle}>Fake Casino</h2>
                            <p className={styles.topCasinoSummary}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ad sapiente, modi,</p>
                            <p className={styles.topCasinoLink}>READ NOW -D</p>
                        </div>
                        <img className={styles.topCasinoImg} src={secondOffer} alt="pic" />
                    </Link>
                    <Link className={styles.topCasinoItem}>
                        <div className={styles.topCasinoText}>
                            <h1 className={styles.topCasinoNumber}>#2</h1>
                            <h2 className={styles.topcasinoTitle}>Fake Casino</h2>
                            <p className={styles.topCasinoSummary}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ad sapiente, modi, </p>
                            <p className={styles.topCasinoLink}>READ NOW -D</p>
                        </div>
                        <img className={styles.topCasinoImg} src={secondOffer} alt="pic" />
                    </Link>
                    <Link className={styles.topCasinoItem}>
                        <div className={styles.topCasinoText}>
                            <h1 className={styles.topCasinoNumber}>#3</h1>
                            <h2 className={styles.topcasinoTitle}>Fake Casino</h2>
                            <p className={styles.topCasinoSummary}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ad sapiente, modi,</p>
                            <p className={styles.topCasinoLink}>READ NOW -D</p>
                        </div>
                        <img className={styles.topCasinoImg} src={secondOffer} alt="pic" />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default TopCasinos;
