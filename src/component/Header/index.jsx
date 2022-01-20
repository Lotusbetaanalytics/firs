import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import { Link} from "react-router-dom";





function Header() {
    const [ user,setUser] = useState(false)
    const data = "jaye"
    return (
        <div>
            <div className={styles.header}>
                <ul>
                <Link to="/"><div className={styles.logo}>
                        <img src="https://i1.wp.com/www.firs.gov.ng/wp-content/uploads/2020/11/firs-logo-3.png?resize=300%2C54&ssl=1" alt="" />
                    </div></Link>
                </ul>
                {user? (
                    <div className={styles.name}>
                        <p>welcome {data}</p>
                    </div>
                ) : ( <div className={styles.navContainer}>
                    <Link to="/login"><div className={`${styles.whiteBG} ${styles.navBtn}`}>Staff Login</div></Link>
                    <Link to="/login"><div className={`${styles.green} ${styles.navBtn}`}>Admin Login</div></Link>
                </div>
                        
                    )  }
                        
            </div>
        </div>
    );
}

export default Header;