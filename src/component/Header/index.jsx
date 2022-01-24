import React from "react";
import styles from "./styles.module.css";
import { Link, useNavigate} from "react-router-dom";
import logo from '../../assets/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../redux/actions_/adminActions";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
function Header() {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getAdminDetails = useSelector((state)=>state.getAdminDetails);
    const {adminInfo} = getAdminDetails

    
    // useEffect(() => {
        
    //     dispatch(adminDetails());
    // }, [dispatch]);

    const logoutHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(adminLogout());
        setTimeout(() => navigate("/login"), [3000])
        setLoading(false);
        
    };

    console.log(adminInfo)
    return (
        <div>
            <div className={styles.header}>
                <ul>
                <Link to="/"><div className={styles.logo}>
                        <img src={logo} alt="safety" />
                    </div></Link>
                </ul>
                {adminInfo && adminInfo? (
                    <div className={styles.navContainer}>
                        <p className={`${styles.whiteBG} ${styles.navBtn}`}>Welcome {adminInfo.firstName}</p>
                {loading ? (
                <Button
                  isLoading
                  loadingText="Validating Credentials..."
                  colorScheme="teal"
                  variant="outline"
                  isFullWidth
                  style={{ height: "5rem" }}
                />
              ) : (
                <button className={`${styles.green} ${styles.navBtn}`} onClick={logoutHandler}>Logout</button>
              )}

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