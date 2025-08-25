import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/zklogo.jpg";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../assets/hamburger-menu-svgrepo-com.svg";
import { ReactComponent as CloseIcon } from "../../assets/cross-svgrepo-com.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/youtube-svgrepo-com.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-167-svgrepo-com.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram-plane-svgrepo-com.svg";
import { ReactComponent as TiktokIcon } from "../../assets/tiktok-svgrepo-com.svg";

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const INDICATOR_WIDTH = 150;
    const EASE = 0.15;

    const [indicator, setIndicator] = useState({ left: 0, scale: 0.3, opacity: 0 });
    const target = useRef({ left: 0, scale: 0.3 });
    const current = useRef({ left: 0, scale: 0.3 });

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    // Animation loop for indicator
    useEffect(() => {
        let frameId;
        const animate = () => {
            const dx = target.current.left - current.current.left;
            current.current.left += dx * EASE;
            const ds = target.current.scale - current.current.scale;
            current.current.scale += ds * EASE;
            setIndicator((prev) => ({ ...prev, left: current.current.left, scale: current.current.scale }));
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const onMouseMove = (e) => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        let left = e.clientX - rect.left - INDICATOR_WIDTH / 2;
        left = Math.max(0, Math.min(left, rect.width - INDICATOR_WIDTH));
        target.current.left = left;
        target.current.scale = 1;
        setIndicator((prev) => ({ ...prev, opacity: 1 }));
    };

    const onMouseLeave = () => {
        target.current.scale = 0.3;
        setIndicator((prev) => ({ ...prev, opacity: 0 }));
    };

    useEffect(() => {
        const hash = location.hash;
        if (hash && hash !== "#") {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setMobileMenuOpen(false);
        }, 300); // match CSS animation duration
    };

    return (
        <header className={styles.navBarContainer}>
            <div className={styles.navBarUpperContainer}>
                <nav className={styles.upper}>
                    <div className={styles.leftLogo}></div>
                    <div className={styles.centerLogo}>
                        <img src={logo} alt="logo" />
                        ZAFERKICK<span className={styles.red}>.COM</span>
                    </div>
                    <div className={styles.userIcons}>
                        <div className={styles.mobileMenuIcon} onClick={() => setMobileMenuOpen(true)}>
                            <HamburgerIcon className={styles.iconSVG} />
                        </div>
                    </div>
                </nav>
            </div>

            <div className={styles.dashedLine}></div>

            <div className={styles.navBarLowerContainer}>
                <nav className={styles.lower} ref={navRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
                    <Link to="/#casinos">CASINOS</Link>
                    <Link to="/#bonuses">CASINO BONUSES</Link>
                    <Link to="/#blog">BLOG</Link>
                    <Link to="/#betoftheday">BET OF THE DAY</Link>
                    <Link to="/#faq">FAQ</Link>
                </nav>
            </div>

            <div className={styles.dashedLine}>
                <span
                    className={styles.indicator}
                    style={{
                        width: INDICATOR_WIDTH,
                        transform: `translateX(${indicator.left}px) scaleX(${indicator.scale})`,
                        opacity: indicator.opacity,
                    }}
                />
            </div>

            {/* Overlay & Mobile Menu */}
            {isMobileMenuOpen && (
                <>
                    <div className={styles.overlay} onClick={closeMenu}></div>
                    <div className={`${styles.mobileMenu} ${isClosing ? styles.slideOut : styles.slideIn}`}>
                        <div className={styles.mobileMenuHeader}>
                            <div className={styles.mobileSocialIcons}>
                                <YouTubeIcon />
                                <InstagramIcon />
                                <TelegramIcon />
                                <TiktokIcon />
                            </div>
                            <CloseIcon className={styles.closeIcon} onClick={closeMenu} />
                        </div>
                        <div className={styles.mobileNavLinks}>
                            <Link onClick={closeMenu}>CASINOS</Link>
                            <Link to="/#bonuses" onClick={closeMenu}>CASINO BONUSES</Link>
                            <Link to="/#blog" onClick={closeMenu}>BLOG</Link>
                            <Link to="/#betoftheday" onClick={closeMenu}>BET OF THE DAY</Link>
                            <Link to="/#faq" onClick={closeMenu}>FAQ</Link>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default NavBar;
