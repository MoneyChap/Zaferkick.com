import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        q: "What is Zaferkick?",
        a: "Zaferkick is a casino bonus arbitrage platform. Compare welcome offers and promos from multiple casinos, and check our daily Bet of the Day sports pick."
    },
    {
        q: "How does bonus arbitrage work?",
        a: "We list bonuses side-by-side so you can pick high-value offers. Used smartly, bonuses can reduce risk while you learn each casino’s terms and wagering rules."
    },
    {
        q: "Is Zaferkick free to use?",
        a: "Yes. Browsing casinos, bonuses, and our daily prediction is free. Costs only apply when you register and deposit at a casino."
    },
    {
        q: "What is the Bet of the Day?",
        a: "A single daily sports prediction based on data and market signals. It refreshes every 24 hours—check back daily for a new pick."
    },
    {
        q: "Do you guarantee winnings?",
        a: "No. Betting always carries risk. Our picks are analytical, not guarantees. Please bet responsibly."
    },
    {
        q: "Are bonuses available in my country?",
        a: "Availability depends on location, licensing, and casino policy. Always review each offer’s terms and eligible regions before joining."
    },
    {
        q: "How often are bonuses updated?",
        a: "We refresh listings regularly and remove expired deals quickly so you see current, working offers."
    },
    {
        q: "Where can I find responsible gambling help?",
        a: "We link to trusted organizations on our Responsible Gaming page and encourage setting limits and taking breaks."
    }
];

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section id="faq" className={styles.faqSection}>
            <div className={styles.headerRow}>
                <h2 className={styles.title}>Frequently asked questions</h2>
                <p className={styles.subtitle}>Everything you need to know about bonuses and the daily pick</p>
            </div>

            <div className={styles.list}>
                {faqs.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={i} className={styles.item}>
                            <div
                                className={styles.summary}
                                onClick={() => toggle(i)}
                                role="button"
                                tabIndex={0}
                            >
                                <span className={styles.q}>{item.q}</span>
                                <svg
                                    className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div
                                className={`${styles.answer} ${isOpen ? styles.show : ""}`}
                                style={{ maxHeight: isOpen ? "500px" : "0px" }}
                            >
                                <p>{item.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


export default FAQ;
