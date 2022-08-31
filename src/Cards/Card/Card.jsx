import React from "react";
import styles from "./Card.module.css";

const Card = ({src}) => {
    return (
        <div className={styles.border}>
            <div className={styles.wrap}>
                <img src={src} className={styles.img} />
                <div className={styles.hiddenBlock}></div>
            </div>
        </div>
    )
}

export default Card;