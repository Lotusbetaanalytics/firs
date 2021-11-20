import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import styles from "./staff.module.css";
import logo from "../../assets/logo.png";
import { Center, Alert, AlertIcon, useToast } from "@chakra-ui/react";
import locations from "../../components/location";
import { useSelector, useDispatch } from "react-redux";
import { addNewEmployee } from "../../redux/actions/adminActions";
import progress from "../../assets/loading.gif";
import { STAFF_REG_RESET } from "../../redux/constants/adminConstants";

const StaffRegister = () => {
  let navigate = useNavigate();
  const toast = useToast();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [state, setState] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNewEmployee(firstname, lastname, state, mobile, email, password)
    );
  };
  const addStaff = useSelector((state) => state.addStaff);
  const { loading, error, success } = addStaff;

  if (success) {
    toast({
      title: "Notification",
      description: "User Registration Successful",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/staff");
    dispatch({ type: STAFF_REG_RESET });
  }

  return (
    <>
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
            <h3>Create Account</h3>
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
                  <label>First Name</label>
                  <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstname}
                    placeholder="First Name"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                    placeholder="Last Name"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Location</label>
                  <select
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  >
                    <option>Select Location....</option>
                    {locations.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputContainer}>
                  <label>Mobile</label>
                  <input
                    type="tel"
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                    placeholder="Mobile Number"
                  />
                </div>
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
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.green}`}
                  >
                    Create Account
                  </button>
                  <Center>
                    <Link to="/staff">Already Have account? Login!</Link>
                  </Center>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffRegister;
