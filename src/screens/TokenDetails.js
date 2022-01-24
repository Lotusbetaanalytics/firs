import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles.module.css";

import { useState } from "react";

function TokenDetails() {
  let navigate = useNavigate();
  const [tokenDetailName, setTokeDetailName] = useState("");
  const [email, setEmail] = useState("");

  const user = JSON.parse(localStorage.getItem("getToken"));

  useEffect(() => {
    if (!user) {
      navigate("/entertoken");
    } else {
      setTokeDetailName(user.data.name);
      setEmail(user.data.email);
    }
  }, [user, navigate]);

  return (
    <div>
      <Header />
      <div className={styles.appfrom}>
        <div className={styles.gridBox}>
          <div className={styles.eachGridBox}>
            <header>Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{tokenDetailName}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Email</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{email}</p>
            </span>
          </div>
          {/*
          <div className={styles.eachGridBox}>
            <header>Phone Number</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.phoneNumber}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Company Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.company}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Laptop</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.laptop}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Host</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.host.email}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.time}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Date</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.date}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Purpose</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.purpose}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time In</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.timeIn}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time Out</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.timeOut}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Status</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.status}</p>
            </span>
          </div> */}
          <div className={styles.btnContainer}>
            <Link to="/entertoken" className={styles.btn4}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetails;
