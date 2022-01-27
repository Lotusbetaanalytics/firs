import React, { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
// import Buttons from "../Buttons";

function Header() {
  const [user] = useState(false);
  const data = "fonsus";
  return (
    <div>
      <div>
        <div className={styles.header}>
          <ul>
            <div className={styles.log}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </ul>
          {user ? (
            <div className={styles.name}>
              <p>{data}</p>
            </div>
          ) : (
            <div className={styles.btnContainer}>
              {/* <Buttons text='Check In' /> */}
              <Link to="/" className={styles.btn}>
                Staff Login
<<<<<<< HEAD
              </div>
            </Link>
            <Link to="/admin/login">
              <div className={`${styles.green} ${styles.navBtn}`}>
=======
              </Link>
              <Link to="/" className={styles.btn}>
>>>>>>> 4b595f0d3d6be9b002b878e594fa23cb4a8103cc
                Admin Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
