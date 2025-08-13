import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/zklogo.jpg";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const navRef = useRef(null);

    const INDICATOR_WIDTH = 150;
    const EASE = 0.15;
    const [indicator, setIndicator] = useState({
        left: 0,
        scale: 0.3,
        opacity: 0,
    });

    const target = useRef({ left: 0, scale: 0.3 });
    const current = useRef({ left: 0, scale: 0.3 });

    useEffect(() => {
        let frameId;
        const animate = () => {
            const dx = target.current.left - current.current.left;
            current.current.left += dx * EASE;
            const ds = target.current.scale - current.current.scale;
            current.current.scale += ds * EASE;

            setIndicator((prev) => ({
                left: current.current.left,
                scale: current.current.scale,
                opacity: prev.opacity,
            }));

            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const onMouseMove = (e) => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        let left = x - INDICATOR_WIDTH / 2;
        left = Math.max(0, Math.min(left, rect.width - INDICATOR_WIDTH));

        target.current.left = left;
        target.current.scale = 1;
        setIndicator((prev) => ({ ...prev, opacity: 1 }));
    };

    const onMouseLeave = () => {
        target.current.scale = 0.3;
        setIndicator((prev) => ({ ...prev, opacity: 0 }));
    };

    return (
        <header className={styles.navBarContainer}>
            <div className={styles.navBarUpperContainer}>
                <nav className={styles.upper}>
                    <div className={styles.leftLogo}>
                    </div>
                    <div className={styles.centerLogo}>
                        <img src={logo} alt="logo" />
                        ZAFERKICK<span className={styles.red}>.COM</span>
                    </div>
                    <div className={styles.userIcons}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20.1633 4.09295L15.0612 2.17072C14.1429 1.86721 13.2245 1.96838 12.5102 2.47423C12.2041 2.67657 12 2.87891 11.7959 3.08125H7.91837C6.38776 3.08125 5.06122 4.39646 5.06122 5.91401V6.9257C5.06122 7.33038 5.36735 7.73506 5.87755 7.73506C6.38776 7.73506 6.69388 7.33038 6.69388 6.9257V5.91401C6.69388 5.20582 7.30612 4.69997 7.91837 4.69997H11.2857V19.3696H7.91837C7.20408 19.3696 6.69388 18.7626 6.69388 18.1555V17.1439C6.69388 16.7392 6.38776 16.3345 5.87755 16.3345C5.36735 16.3345 5.06122 16.638 5.06122 17.0427V18.0544C5.06122 19.5719 6.28572 20.8871 7.91837 20.8871H11.7959C12 21.0895 12.2041 21.393 12.4082 21.4942C12.9184 21.7977 13.4286 22 14.0408 22C14.3469 22 14.7551 21.8988 15.0612 21.7977L20.1633 19.8754C21.2857 19.4708 22 18.4591 22 17.245V6.62219C22 5.50933 21.1837 4.39646 20.1633 4.09295Z"
                                fill="#ff0000"
                            />
                            <path
                                d="M6.38776 13.5017C6.08163 13.8052 6.08163 14.3111 6.38776 14.6146C6.4898 14.7158 6.69388 14.8169 6.89796 14.8169C7.10204 14.8169 7.30612 14.7158 7.40816 14.6146L9.44898 12.5912C9.55102 12.49 9.55102 12.3889 9.65306 12.3889C9.65306 12.2877 9.7551 12.1865 9.7551 12.0854C9.7551 11.9842 9.7551 11.883 9.65306 11.7819C9.65306 11.6807 9.55102 11.5795 9.44898 11.5795L7.40816 9.55612C7.10204 9.25261 6.59184 9.25261 6.28571 9.55612C5.97959 9.85963 5.97959 10.3655 6.28571 10.669L7 11.3772H2.81633C2.40816 11.3772 2 11.6807 2 12.1865C2 12.6924 2.30612 12.9959 2.81633 12.9959H7.10204L6.38776 13.5017Z"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>
                </nav>
            </div>
            <div className={styles.dashedLine}></div>
            <div className={styles.navBarLowerContainer}>

                <nav className={styles.lower} ref={navRef} onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}>
                    <Link>CASINOS</Link>
                    <Link>CASINO BONUSES</Link>
                    <Link>BLOG</Link>
                    <Link>BET OF THE DAY</Link>
                    <Link>FAQ</Link>
                </nav>
            </div>
            <div className={styles.dashedLine}>
                <span className={styles.indicator}
                    style={{
                        width: INDICATOR_WIDTH,
                        transform: `translateX(${indicator.left}px) scaleX(${indicator.scale})`,
                        opacity: indicator.opacity,
                    }}
                />
            </div>

        </header>
    )
};

export default NavBar;
