import React, { useEffect, useState } from "react";
import styles from "./BetOfTheDay.module.css";

import leagueLogo from "../../../assets/zklogo.jpg";
import galatasarayLogo from "../../../assets/galataskaray.svg";
import fenerbahceLogo from "../../../assets/Fenerbahce.svg";
import trabzonsporLogo from "../../../assets/Trabzonspor.svg";
import kocaelisporLogo from "../../../assets/kocaelispor.svg";
import feyenoordLogo from "../../../assets/feyenoord.svg";
import basaksehirLogo from "../../../assets/İstanbul_Başakşehir_logo.svg.png";
import vikingfkLogo from "../../../assets/Viking_FK_logo_2020.svg.png";
import bg from "../../../assets/SoccerBG.png";

const BetOfTheDay = () => {
    // you can wire these to real data later
    const date = "13 Aug";
    const time = "19:00";
    const home = { name: "Basaksehir", logo: basaksehirLogo };
    const away = { name: "Viking FK", logo: vikingfkLogo };
    const pick = home;            // chosen team
    const confidence = 78;        // 0–100

    const BET_DURATION = 24 * 60 * 60 * 1000; // ms
    const [remaining, setRemaining] = useState(BET_DURATION);

    useEffect(() => {
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const left = BET_DURATION - (elapsed % BET_DURATION);
            setRemaining(left);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Bet of the day</h1>

            <article className={styles.card}>
                <img src={bg} alt="stadium background" className={styles.bg} />

                <div className={styles.overlay} />

                <header className={styles.topRow}>
                    <div className={styles.leagueBadge}>
                        <img src={leagueLogo} alt="League logo" />
                    </div>

                    <div className={styles.kickers}>
                        <span className={styles.kicker}>{date}</span>
                        <span className={styles.dot} />
                        <span className={styles.kicker}>{time}</span>
                    </div>
                </header>

                <div className={styles.teamsRow}>
                    <div className={styles.team}>
                        <div className={styles.teamLogo}>
                            <img src={home.logo} alt={`${home.name} logo`} />
                        </div>
                        <span className={styles.teamName}>{home.name}</span>
                    </div>

                    <div className={styles.vsPill}>VS</div>

                    <div className={styles.team}>
                        <div className={styles.teamLogo}>
                            <img src={away.logo} alt={`${away.name} logo`} />
                        </div>
                        <span className={styles.teamName}>{away.name}</span>
                    </div>
                </div>

                <div className={styles.pickRibbon}>
                    <div className={styles.pickLeft}>
                        <span className={styles.pickLabel}>Pick</span>
                        <div className={styles.pickTeam}>
                            {/* <img src={pick.logo} alt={`${pick.name} logo`} /> */}
                            {/* <span className={styles.pickName}>{pick.name}</span> */}
                            <span className={styles.pickName}>OVER 2.5</span>
                        </div>
                    </div>

                    <div className={styles.confidence}>
                        <span className={styles.confidenceLabel}>Confidence</span>
                        <div className={styles.meter}>
                            <div
                                className={styles.meterFill}
                                style={{ width: `${confidence}%` }}
                                aria-hidden="true"
                            />
                        </div>
                        <span className={styles.confidenceValue}>{confidence}%</span>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <span className={styles.next}>Next prediction in {formatTime(remaining)}</span>
                </footer>
            </article>
        </section>
    );
};

export default BetOfTheDay;
