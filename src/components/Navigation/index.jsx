import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './styles.module.css'


const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <img src={logo} alt="FIRS" />
            <div className={styles.right}>
                <Link to="/frontdesk" className={`${styles.btn} ${styles.filled}`}>Frontdesk Login</Link>
                <Link to="/staff" className={`${styles.btn}`}>Staff Login</Link>
            </div>
        </div>
    )
}

export default Navigation
