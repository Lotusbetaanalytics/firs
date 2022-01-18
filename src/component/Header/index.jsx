import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";





function Header() {
    const [ user,setUser] = useState(false)
    const data = "jaye"
    return (
        <div>
            <div className={styles.header}>
                <ul>
                    <div className={styles.log}>
                        <img src="https://i1.wp.com/www.firs.gov.ng/wp-content/uploads/2020/11/firs-logo-3.png?resize=300%2C54&ssl=1" alt="" />
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
    );
}

export default Header;