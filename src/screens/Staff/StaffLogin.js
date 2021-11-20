import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import styles from "./staff.module.css";
import logo from "../../assets/logo.png";
import { Center, Alert, AlertIcon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { staffAuth } from "../../redux/actions/staffActions";
import progress from "../../assets/loading.gif";

const StaffLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(staffAuth(email, password));
  };
  const staffLogin = useSelector((state) => state.staffLogin);
  const { loading, error, staffInfo } = staffLogin;

  useEffect(() => {
    if (staffInfo) {
      navigate("/staff/dashboard");
    }
  }, [navigate, staffInfo]);

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.loginGrid}>
          <div className={styles.backdrop}>
            <h1>Visitor's Management System</h1>
            <p>
              Powered By:{" "}
              <a href="https://lotusbetaanalytics.com">Lotus Beta Analytics</a>
            </p>
          </div>
          <div className={`${styles.loginBox} ${styles.top}`}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <h3>Staff Portal</h3>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            {loading ? (
              <Center>
                <img src={progress} alt="loading" />
              </Center>
            ) : (
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email Address"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.green}`}
                  >
                    Login
                  </button>
                  <Center>
                    <Link to="/staff/create-account">
                      Don't Have an account? Create Account!
                    </Link>
                  </Center>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
