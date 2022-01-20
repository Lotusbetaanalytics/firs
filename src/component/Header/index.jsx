import React from "react";
import styles from "./styles.module.css";
import { Link} from "react-router-dom";
import logo from '../../assets/logo.png'
import { useSelector } from "react-redux";
function Header() {
    const adminDetails = useSelector((state)=>state.adminDetails);
    const {user} = adminDetails
    return (
        <div>
            <div className={styles.header}>
                <ul>
                <Link to="/"><div className={styles.logo}>
                        <img src={logo} alt="safety" />
                    </div></Link>
                </ul>
                {user && user? (
                    <div className={styles.name}>
                        <p>welcome {user.firstName}</p>
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