import React from "react";
import styles from "./HomePage.module.css";
import firstOffer from "../../assets/BachaFreerollV2_EN.jpg";
import secondOffer from "../../assets/EWU_WebBanner25_EN.jpg";
// import { Link } from "react-router-dom";
import CasinoOffer from "./CasinoOffer/CasinoOffer";
import Carousel from "./Carousel/Carousel";
import EventCard from "./EventCard/EventCard";
import TopCasinos from "./TopCasinos/TopCasinos";
import OfferSection from "./OfferSection/OfferSection";
import BetOfTheDay from "./BetOfTheDay/BetOfTheDay";
import FAQ from "./FAQ/FAQ";

const events = [
    {
        header: "Football event",
        img: firstOffer,
        title: "Big title",
        summary: "Short teaser about the match…",
        date: "20.20.2020",
        link: "/event/1",
    },
    {
        header: "Basketball event",
        img: secondOffer,
        title: "Another title",
        summary: "Another teaser…",
        date: "21.10.2020",
        link: "/event/2",
    },
    {
        header: "Basketball event",
        img: secondOffer,
        title: "Another title",
        summary: "Another teaser…",
        date: "21.10.2020",
        link: "/event/2",
    },
    {
        header: "Basketball event",
        img: secondOffer,
        title: "Another title",
        summary: "Another teaser…",
        date: "21.10.2020",
        link: "/event/2",
    },
];


const HomePage = (props) => {
    return (
        <div>
            <section className={styles.heroSectionContainer}>
                <div className={styles.heroSection}>
                    <div className={styles.featuredOfferSection}>
                        <div className={styles.featuredCasinoContainer}>
                            Lets get it
                        </div>
                        <div className={styles.featuredItemsContainer}>
                            <Carousel autoPlayMs={10000}>
                                <img src={firstOffer} alt="pic" />
                                <img src={secondOffer} alt="pic" />
                                <img src={firstOffer} alt="pic" />
                            </Carousel>
                        </div>
                        <div className={styles.featuredEventsContainer}>
                            <Carousel autoPlayMs={5000}>
                                {events.map((e) => (
                                    <EventCard key={e.link} {...e} />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles.heroOfferWall}>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                        <div className={styles.dashedLine}></div>
                        <CasinoOffer />
                    </div>
                </div>
                <TopCasinos />
            </section>
            <BetOfTheDay />
            <OfferSection />
            <FAQ />
        </div>
    )
};

export default HomePage;
