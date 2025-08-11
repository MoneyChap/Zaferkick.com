import React from "react";
import styles from "./TopCasinos.module.css";
import { Link } from "react-router-dom";
import secondOffer from "../../../assets/EWU_WebBanner25_EN.jpg";

const TopCasinos = () => {
    return (
        <section className={styles.wrap}>
            {/* featured */}
            <div className={styles.featuredStack}>
                <Link to="/" className={styles.featImgLink} aria-label="Read Template Casino review">
                    <img src={secondOffer} alt="Template Casino banner" className={styles.featImg} />
                </Link>

                <div className={styles.featContent}>
                    <span className={styles.badge}>Editor’s pick</span>
                    <h2 className={styles.featTitle}>Template Casino</h2>
                    <p className={styles.featSummary}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nulla, officiis
                        dolore dicta error rerum unde esse alias, aliquid ad voluptatum dolores labore
                        fugiat, placeat aspernatur adipisci sit temporibus mollitia?
                    </p>

                    <Link to="/" className={styles.featCtaButton}>Read now</Link>
                </div>
            </div>

            {/* top list */}
            <aside className={styles.listCol}>
                <h3 className={styles.listTitle}>#Top casinos</h3>

                <nav className={styles.list}>
                    {[
                        { n: 1, title: "Fake Casino", img: secondOffer },
                        { n: 2, title: "Fake Casino", img: secondOffer },
                        { n: 3, title: "Fake Casino", img: secondOffer },
                    ].map(item => (
                        <Link key={item.n} to="/" className={styles.item} aria-label={`Read ${item.title} review`}>
                            <div className={styles.rank}>#{item.n}</div>

                            <div className={styles.itemText}>
                                <h4 className={styles.itemTitle}>{item.title}</h4>
                                <p className={styles.itemSummary}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad sapiente.
                                </p>
                                <span className={styles.itemLink}>Read now</span>
                            </div>

                            <img src={item.img} alt="" className={styles.thumb} />
                        </Link>
                    ))}
                </nav>
            </aside>
        </section>
    );
};

export default TopCasinos;
