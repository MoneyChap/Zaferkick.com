import React, { useState, useId } from "react";
import { Link } from "react-router-dom";
import styles from "./OfferItem.module.css";

const OfferItem = ({
    img,
    casinoHook = "Over 9,000 games to choose from",
    casinoBonuses = [
        "100 free spins (no deposit)",
        "150% up to $1,000",
        "25% free bet up to $100",
    ],
    link = "/",
    reviewTitle = "Casino Joy review",
}) => {
    const [open, setOpen] = useState(false);
    const detailsId = useId();

    const bonuses = Array.isArray(casinoBonuses) ? casinoBonuses : [casinoBonuses];


    return (
        <article className={styles.card}>
            <div className={styles.grid}>
                {/* Left: big image/logo */}
                <div className={styles.media}>
                    <img className={styles.cover} src={img} alt="Casino cover" />
                </div>

                {/* Middle: content */}
                <div className={styles.content}>
                    <Link to="/" className={styles.title}>{reviewTitle}</Link>

                    <div className={styles.hookRow}>
                        <span className={styles.hook}>{casinoHook}</span>
                        <span className={styles.rating}>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26 6.91.99-5 4.86 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.86 6.91-.99L12 2z" /></svg>
                            5.0/5
                        </span>
                    </div>
                    <div className={styles.bullets}>
                        {bonuses.slice(0, 3).map((b, i) => b ? <p key={i}>{b}</p> : null)}
                    </div>

                    <div className={styles.actionsRow}>
                        <button
                            className={styles.moreBtn}
                            onClick={() => setOpen(o => !o)}
                            aria-expanded={open}
                            aria-controls={detailsId}
                        >
                            More details
                            <svg className={open ? styles.chevUp : styles.chevDown} viewBox="0 0 24 24">
                                <path d="M7 14l5-5 5 5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right: CTA stack */}
                <aside className={styles.ctaCol}>
                    <div className={styles.ctaHighlight}>
                        <div className={styles.ctaNum}>225%</div>
                        <div className={styles.ctaNote}>up to $2,000</div>
                    </div>
                    <Link to={link} className={styles.ctaBtn}>
                        <span>Claim now</span>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </Link>
                    <span className={styles.tc}>18+ T&Cs apply</span>
                </aside>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Dropdown – premium panel */}
            <section id={detailsId} className={`${styles.details} ${open ? styles.open : ""}`}>
                <div className={styles.detailGrid}>
                    <div className={styles.infoCard}>
                        <h3>Key facts</h3>
                        <ul className={styles.specs}>
                            <li><span>Available in</span><strong>EU</strong></li>
                            <li><span>Verified</span><strong>July 2025</strong></li>
                            <li><span>Min deposit</span><strong>$20</strong></li>
                            <li><span>Established</span><strong>2024</strong></li>
                            <li><span>Games</span><strong>1900+</strong></li>
                            <li><span>Payout speed</span><strong>~ 4 hours</strong></li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Why we like it</h3>
                        <ul className={styles.checks}>
                            <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>Easy to navigate</li>
                            <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>Alphabetical game sorting</li>
                            <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>Sportsbook available</li>
                        </ul>
                        <Link to="/" className={styles.secondaryLink}>Read the full review</Link>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default OfferItem;
