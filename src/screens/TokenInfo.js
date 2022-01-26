import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles.module.css";

function TokenInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [host, setHost] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [laptop, setLaptop] = useState("");
  const [purpose, setPurpose] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [tokenIn, setTokenIn] = useState("");

  const tokenHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className={styles.appform}>
        <form className={styles.formGrid} onSubmit={tokenHandler}>
          <div className={styles.inputContainer2}>
            <label>Visitors full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Host Name</label>
            <input
              type="text"
              onChange={(e) => setHost(e.target.value)}
              value={host}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Phone Number</label>
            <input
              type="number"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Laptop Details</label>
            <input
              type="text"
              onChange={(e) => setLaptop(e.target.value)}
              value={laptop}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Company</label>
            <input
              type="text"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Time Register</label>
            <input
              type="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Date of Registration</label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Purpose of Visit</label>
            <input
              type="text"
              onChange={(e) => setPurpose(e.target.value)}
              value={purpose}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Time In</label>
            <input
              type="time"
              onChange={(e) => setTimeIn(e.target.value)}
              value={timeIn}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Time Out</label>
            <input
              type="time"
              onChange={(e) => setTimeOut(e.target.value)}
              value={timeOut}
            />
          </div>

          <div className={styles.inputContainer2}>
            <label>Token</label>
            <input
              type="number"
              onChange={(e) => setTokenIn(e.target.value)}
              value={tokenIn}
            />
          </div>

          <div className={styles.btnSubmit}>
            <button type="submit" className={styles.btn3}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TokenInfo;
