import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userCheckInToken } from "../redux/action/userTokenAction";
import { userCheckOutToken } from "../redux/action/userTokenAction";

function TokenDetails() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [tokenDetailName, setTokeDetailName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [laptop, setLaptop] = useState("");
  const [host, setHost] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [status, setStatus] = useState("");

  const user = JSON.parse(localStorage.getItem("getToken"));

  useEffect(() => {
    if (!user) {
      navigate("/entertoken");
    } else {
      setTokeDetailName(user.data.name);
      setEmail(user.data.email);
      setPhoneNumber(user.data.phoneNumber);
      setCompany(user.data.company);
      setLaptop(user.data.laptop);
      setHost(user.data.host);
      setTime(user.data.time);
      setDate(user.data.date);
      setPurpose(user.data.purpose);
      setTimeIn(user.data.timeIn);
      setTimeOut(user.data.timeOut);
      setStatus(user.data.status);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  // useEffect(() => {
  //   if (user.data.status === checkout) {
  //     navigate("/checkoutsuccess");
  //   }
  // }, [user.data.status, navigate]);

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
          <div className={styles.eachGridBox}>
            <header>Phone Number</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{phone}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Company Name</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{company}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Laptop</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{laptop}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Host</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{host.data}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{time}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Date</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{date}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Purpose</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{purpose}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time In</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{timeIn}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Time Out</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{timeOut}</p>
            </span>
          </div>

          <div className={styles.eachGridBox}>
            <header>Status</header>
            <span className={styles.titleContainer}>
              <p className={styles.titleName}>{status}</p>
            </span>
          </div>

          <div className={styles.btnContainer}>
            {user.data.status === "Pending" ? (
              <button
                onClick={() =>
                  dispatch(userCheckInToken(user.data.token, navigate))
                }
                className={styles.btn4}
              >
                {user.data.status === "Pending" ? "Check In" : "Check Out"}
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch(userCheckOutToken(user.data.token, navigate))
                }
                className={styles.btn4}
              >
                {user.data.status === "Pending" ? "Check In" : "Check Out"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetails;
