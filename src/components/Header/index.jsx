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
              </Link>
              <Link to="/admin/login" className={styles.btn}>
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
