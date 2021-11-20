import React from 'react'
import styles from './styles.module.css';
const Cards = (props) => {
    return (
        <div className={styles.hcard}>
            <div className={styles.hlgrid}>
                <div className={styles.icons}>
                    <div className={`${styles.square} ${props.color}`}>
                        <div className={`${styles.ccircle}`}><i>{props.children}</i></div>
                    </div>
                </div>
                <div className={styles.text}>
                    <h4>{props.count}</h4>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
