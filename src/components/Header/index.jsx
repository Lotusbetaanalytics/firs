import React from 'react'
import styles from './styles.module.css'
import logo from "../../assets/logo.png"

function Header() {
    return (
        <div>
            <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="NMFB" />
            </div>
        </div>
        </div>
    )
}

export default Header
