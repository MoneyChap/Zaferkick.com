import React, { useState } from "react";
import styles from "./OfferItem.module.css";
import { Link } from "react-router-dom";

const OfferItem = ({ img, casinoHook, casinoBonuses, link, tag }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.offerItem}>
            <div className={styles.offerItemHead}>
                <div className={styles.offerRightSide}>
                    <div className={styles.offerTitleContainer}>
                        <img src={img} alt="Casino" />
                        <Link className={styles.offerReview} to="/">Casino Joy Review</Link>
                        <div className={styles.ratingContainer}>
                            <span><svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                                height={24}
                                width={24}
                                version="1.1"
                                id="Layer_1"
                                viewBox="0 0 329.942 329.942"
                                xmlSpace="preserve"
                            >
                                <path
                                    id="XMLID_16_"
                                    d="M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10.209l-95.822-13.922l-42.854-86.837
      c-2.527-5.12-7.742-8.362-13.451-8.362c-5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922
      c-5.65,0.821-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,67.582L57.496,305.07
      c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059
      l85.71,45.059c2.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-0.13-2.275-0.376-3.352
      l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132.096,329.208,126.666z"
                                />
                            </svg>
                            </span> 5.0/5
                        </div>
                        <button className={styles.detailsButton} onClick={() => setOpen(o => !o)}>
                            {open ? "Less Details" : "More Details"}
                            <span className={open ? styles.iconUp : styles.iconDown} >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    enableBackground="new 0 0 32 32"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 24"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  
       l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  
       c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                                    />
                                </svg>
                            </span>

                        </button>
                    </div>
                    <div className={styles.bonusContainer}>
                        <p className={styles.offerTag}>Casino Of The Month</p>
                        <p className={styles.casinoHook}>{casinoHook}</p>
                        <div className={styles.bonusList}>
                            {casinoBonuses}
                        </div>
                    </div>
                </div>
                <div className={styles.ctaSide}>
                    <Link className={styles.offerLink} to={link}>CLAIM BONUS</Link>
                    <p>18+ T&Cs apply</p>
                </div>
            </div>
            <div className={`${styles.dashedLine}` + (open ? ` ${styles.show}` : ``)} />
            <div className={`${styles.moreDetailsContainer} ${open ? styles.open : ""
                }`}>
                <div className={styles.infoContainer}>
                    <h2>Additional Information</h2>
                    <div className={styles.infoBox}>
                        <p>Available in: </p>
                        <p>Verified in: <span>July 2025</span></p>
                        <p>Min Deposit: <span>$20</span></p>
                        <p>Year Established: <span>2024</span></p>
                        <p>Casino Games: <span>1900+</span></p>
                        <p>Payout Speed: <span>4 Hours</span></p>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <h2>Our Verdict</h2>
                    <div className={styles.infoBox}>
                        <p>East-to-navigate website</p>
                        <p>Games sorted alphabetically</p>
                        <p>Also offers betting</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OfferItem;
