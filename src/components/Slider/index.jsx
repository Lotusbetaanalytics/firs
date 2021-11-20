import React from 'react'
import styles from './styles.module.css'

const Slider = ({ size }) => {
    return (
        <div className={styles.slider}>
            <div className={styles.indicator} style={{ width: `${size}%` }}></div>
        </div>
    )
}

export default Slider
