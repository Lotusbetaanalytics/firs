import React, { useState } from "react";
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

  const tokenHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.appform}>
      <form className={styles.formGrid} onSubmit={tokenHandler}>
        <div className={styles.inputContainer2}>
          <label>Visitors Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className={styles.inputContainer2}>
          <label>Host</label>
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
          <label>Visitors laptop Details</label>
          <input
            type="text"
            onChange={(e) => setLaptop(e.target.value)}
            value={laptop}
          />
        </div>

        <div className={styles.inputContainer2}>
          <label>Visitors Company</label>
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
          <label>Visit Requirments</label>
          <select onChange={(e) => setPurpose(e.target.value)} value={purpose}>
            <option>Select....</option>
            <option value="TimeIn">Time In</option>
            <option value="Time Out">Time Out</option>
            <option value="isActive">On Premises</option>
          </select>
        </div>
        <div className={styles.btnSubmit}>
          <button type="submit" className={styles.btn3}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TokenInfo;
