import React from "react";
import styles from "./OfferSection.module.css";
import OfferItem from "./OfferItem/OfferItem";
import casinoJoy from "../../../assets/CasinoJoy_370x150.jpg"
import flagman from "../../../assets/Flagman_370x150-1.jpg"
import irwin from "../../../assets/Irwin_370x150.jpg"
import legzo from "../../../assets/Lezgo_370x150-1.jpg"
import gizbo from "../../../assets/Gizbo_370x150-1.jpg"
import lex from "../../../assets/LEX_350x170-1.jpg"
import drip from "../../../assets/350x170__0014_Drip.jpg"
import monro from "../../../assets/Monro_sml-1.jpg"


const OfferSection = (props) => {
    const offers = [
        {
            link: "/1",
            img: casinoJoy,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/2",
            img: flagman,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/3",
            img: irwin,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/4",
            img: legzo,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/5",
            img: gizbo,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/6",
            img: lex,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/7",
            img: drip,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        },
        {
            link: "/8",
            img: monro,
            casinoHook: "OVER 9000 GAMES TO CHOOSE FROM",
            casinoBonuses: <p>1. 100 NO DEPOSIT free spins with code: Nigger<br />2. 150% bonus up to 1000$ on your first deposit<br />3. 25% free bet up to 100$</p>
        }
    ];

    return (
        <section id="bonuses" className={styles.offerSectionContainer}>
            <div className={styles.offerSection}>
                <div className={styles.offerTitleContainer}>
                    <h1>THE ULTIMATE BONUS LINEUP</h1>
                    <p>Top Rated Casinos</p>
                </div>
                <div className={styles.bonusListContainer}>
                    {offers.map((o) => (
                        <OfferItem key={o.link} link={o.link} img={o.img} casinoHook={o.casinoHook} casinoBonuses={o.casinoBonuses} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default OfferSection;
