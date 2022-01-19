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
                        <p>welcome {data}</p>
                    </div>
                ) : ( <div className={styles.navContainer}>
                    <div className={`${styles.whiteBG} ${styles.navBtn}`}>Staff Login</div>
                    <div className={`${styles.green} ${styles.navBtn}`}>Admin Login</div>
                </div>
                        
                    )  }
                        
            </div>
        </div>
    );
}

export default Header;