import React, { useState } from 'react'
import styles from './styles.module.css'
import logo from "../../assets/logo.png"

function Header() {
    const [ user,setUser] = useState(false)
    const data = "fonsus"
    return (
        <div>
     
        <div>
            <div className={styles.header}>
                <ul>
                    <div className={styles.log}>
                        <img src={logo} alt="" />
                    </div>
                </ul>
                {user? (
                    <div className={styles.name}>
                        <p>{data}</p>
                    </div>
                ) : ( 
                    <ul>
                        <li className={styles.green}>Staff Login</li>
                            <li className={styles.whiteBG}>Admin Login</li>
                    </ul>
                    )  }
                        
            </div>
        </div>
        </div>
    )
}

export default Header
