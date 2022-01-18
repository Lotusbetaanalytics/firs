import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { Alert, AlertIcon, useToast, Button } from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const Register = () => {
    const Dispatch = useDispatch()
    // const toast = useToast();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [floor, setFloor] = useState("");
  const [office, setOffice] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const loading = false

  const registerHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch((email, password));
    }
  };

    return (
        <div className={styles.customPadding}>
           <div className={styles.container}>
          {msg && (
            <Alert status="warning">
              <AlertIcon />
              All Fields are Required!
            </Alert>
          )}
          <form onSubmit={registerHandler} className={styles.form2}>
          <div className={styles.inputContainer2_}>
              <label>First Name</label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Last Name</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Email Address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Phone Number</label>
              <input
                type="Tel"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Role</label>
              <input
                type="text"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Department</label>
              <input
                type="text"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Office floor</label>
              <input
                type="email"
                onChange={(e) => setFloor(e.target.value)}
                value={floor}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Office Room Number</label>
              <input
                type="number"
                onChange={(e) => setOffice(e.target.value)}
                value={office}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Confirm Password</label>
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            
            <div className={`${styles.inputContainer_3} ${styles.center}`}>
            <div className={styles.inputContainer2_}>
              <label style={{ visibility: "hidden" }}>Register</label>
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
                <input
                  type="submit"
                  value="register"
                  className={`${styles.btn} ${styles.green} ${styles.marginTop}`}
                />
                
              )}
    
            </div>
            <div>
            Have an account? <Link to="/login">Log in</Link>
            </div>
            </div>
            
          </form>
        </div>
        </div>
    )
};
export default Register;

