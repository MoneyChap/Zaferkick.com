import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children, autoPlayMs = 10000, dotsOutside = true }) {
    const count = React.Children.count(children);

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0); // px offset while dragging

    const containerRef = useRef(null);
    const startXRef = useRef(0);

    const goTo = useCallback((i) => setIndex((i + count) % count), [count]);

    // width via ResizeObserver
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // autoplay
    useEffect(() => {
        if (!autoPlayMs) return;
        const id = setTimeout(() => goTo(index + 1), autoPlayMs);
        return () => clearTimeout(id);
    }, [index, autoPlayMs, goTo]);

    const getX = (e) => ("touches" in e ? e.touches[0].clientX : e.clientX);

    const onDown = (e) => {
        e.preventDefault();                     // stop native img drag
        setDragging(true);
        startXRef.current = getX(e);
    };

    const onMove = (e) => {
        if (!dragging) return;
        setDragOffset(getX(e) - startXRef.current);
    };

    const onUp = () => {
        if (!dragging) return;
        setDragging(false);

        const threshold = width / 4;
        if (Math.abs(dragOffset) > threshold) {
            goTo(index + (dragOffset < 0 ? 1 : -1));
        }
        setDragOffset(0);
    };

    const transformPx = dragging
        ? -index * width + dragOffset
        : -index * width;

    return (
        <div className={styles.wrapper}>
            <div
                ref={containerRef}
                className={styles.viewport}
                onMouseLeave={onUp}
                onDragStart={(e) => e.preventDefault()}
            >
                <div
                    className={`${styles.track} ${dragging ? styles.noTransition : ""}`}
                    style={{ transform: `translate3d(${transformPx}px,0,0)` }}
                    onMouseDown={onDown}
                    onMouseMove={onMove}
                    onMouseUp={onUp}
                    onTouchStart={onDown}
                    onTouchMove={onMove}
                    onTouchEnd={onUp}
                >
                    {React.Children.map(children, (child, i) => (
                        <div className={styles.slide} key={i}>
                            {React.isValidElement(child)
                                ? React.cloneElement(child, { draggable: false })
                                : child}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.dots} ${dotsOutside ? styles.dotsBelow : ""}`}>
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === index ? styles.active : ""}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
