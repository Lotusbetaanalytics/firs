import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles.module.css";
import { useSelector } from "react-redux";

function TokenDetails() {
  const tokenUser = useSelector((state) => state.tokenUser);
  const { getToken } = tokenUser;
  return (
    <div>
      <Header />
      <div className={styles.appfrom}>
        <div className={styles.gridBox}>
          <div className={styles.eachGridBox}>
            <header>Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken && getToken.name}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Email</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>johnduffy@gmail.com</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Phone Number</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>08032217455</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Company Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>Lotus Beta Project</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Laptop</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>Hp Core i3</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Host</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>Abidoye</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>11:34:23</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Date</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>2022-05-17</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Purpose</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>Offical Arrest</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time In</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>09:12:33</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time Out</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>01:46:00</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Status</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>Approved</p>
            </span>
          </div>
          <div className={styles.btnContainer}>
            <Link to="/entertoken/:token" className={styles.btn4}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetails;
