import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 200);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
                        <div className={styles.dashedLine}></div>

            <div className={styles.inner}>
                {/* brand */}
                <div className={styles.brand}>
                    {/* replace src with your footer logo if you have one */}
                    <span className={styles.logoText}>ZAFERKICK<span className={styles.logoCom}>.COM</span></span>
                </div>

                {/* quick links */}
                <nav className={styles.links} aria-label="Footer">
                    <Link to="/terms">Terms and conditions</Link>
                    <span className={styles.sep} aria-hidden="true">|</span>
                    <Link to="/privacy">Privacy policy</Link>
                    <span className={styles.sep} aria-hidden="true">|</span>
                    <Link to="/responsible-gaming">Responsible gaming</Link>
                </nav>

                {/* support */}
                <div className={styles.support}>
                    <span>Support:</span>
                    <a href="mailto:info@zaferkick.com" className={styles.mail}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        info@zaferkick.com
                    </a>
                </div>

                {/* meta */}
                <div className={styles.meta}>
                    <p>Copyright © {year} — Zaferkick Entertainment Ltd. All rights reserved.</p>
                    <p>126 East Ferry Road, Canary Wharf, London, E14 9FP, United Kingdom</p>
                    <div className={styles.cards}>
                        {/* Mastercard */}
                        <svg viewBox="0 0 64 40" className={styles.cardIcon} aria-label="Mastercard">
                            <rect x="1" y="1" width="62" height="38" rx="6" ry="6" fill="none" stroke="currentColor" opacity=".25" />
                            <circle cx="26" cy="20" r="10" fill="#EA001B" />
                            <circle cx="38" cy="20" r="10" fill="#F79E1B" />
                            <path d="M31 10a10 10 0 0 0 0 20a10 10 0 0 0 0-20z" fill="#FF5F00" />
                        </svg>
                        {/* Visa */}
                        <svg viewBox="0 0 64 40" className={styles.cardIcon} aria-label="Visa">
                            <rect x="1" y="1" width="62" height="38" rx="6" ry="6" fill="none" stroke="currentColor" opacity=".25" />
                            <text x="32" y="26" textAnchor="middle" fontSize="16" fontWeight="800" fill="currentColor">VISA</text>
                        </svg>
                    </div>
                </div>
            </div>

            {/* back to top */}
            <button
                className={`${styles.toTop} ${showTop ? styles.toTopVisible : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 5l7 7M12 5L5 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5v14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;
