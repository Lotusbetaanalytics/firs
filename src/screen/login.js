import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { Alert, AlertIcon, useToast, Button } from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const Login = () => {
    const Dispatch = useDispatch()
    // const toast = useToast();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const loading = false

  const loginHandler = (e) => {
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
          <div className={styles.mdForm}>
          <form onSubmit={loginHandler}>
            <div className={styles.inputContainer_}>
              <label>Email Address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.inputContainer_}>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <span className={styles.forget}><Link to="/forgotPassword">Forgot Password?</Link></span> 
            <div className={styles.inputContainer_}>
              <label style={{ visibility: "hidden" }}>Login</label>
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
                  value="Login"
                  className={`${styles.btn} ${styles.green} ${styles.marginTop}`}
                />
              )}
            </div>
            <div className={styles.microsoft}>
                <span className={styles.paddingTp} >Sign in with Microsoft</span>
                 <div className={styles.micro}>  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png'/></div> 
                </div>
            <div className={styles.text2}>Don't Have an account? <Link to="/register">Register</Link>
            </div>
          </form>
          </div>
         
        </div>
        </div>
    )
};
export default Login;

