import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import store from "../redux/store";
import { USER_TOKEN_SUCCESS } from "../redux/constants/userTokenContants";

function TokenDetails() {
  const dispatch = useDispatch();
  const [tokenDetailName, setTokeDetailName] = useState("");
  const tokenUser = useSelector((state) => state.tokenUser);
  const { getToken, success } = tokenUser;

  if (success) {
    // dispatch({ type: USER_TOKEN_SUCCESS });
    console.log("look at me");
    console.log(getToken);
  }

  // const data = getToken;

  // const host = data;
  // console.log(host);
  // console.log(data);

  // useEffect(() => {
  //   // dispatch(userToken());
  //   setTokeDetailName(getToken.data.name);
  // }, [getToken]);

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
          {/* 
          <div className={styles.eachGridBox}>
            <header>Email</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{getToken.data.email}</p>
            </span>
          </div>

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
