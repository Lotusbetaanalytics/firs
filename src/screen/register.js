import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { Alert, AlertIcon, useToast, Button } from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_LOGIN_RESET, ADMIN_REGISTRATION_RESET } from '../redux/constants_/adminConstants';
import { registerAdmin } from '../redux/actions_/adminActions';


const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [floor, setFloor] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");
  const isAdmin = true;
  
  
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const [pmsg, setPMsg] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminRegister = useSelector((state) => state.adminRegister);
  const { loading, error, success } = adminRegister;

  const registerHandler = (e) => {
    e.preventDefault();
    setPMsg(false);
    if (
      !firstName ||
      !lastName ||
      !department ||
      !floor ||
      !officeNumber ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword
    ) {
      setMsg(true);
    } else {
      setMsg(false);
      if (password === confirmPassword) {
        dispatch(
          registerAdmin(
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
            department,
            floor,
            officeNumber,
            isAdmin,
          )
        );
      } else {
        setPMsg(true);
      }
    }
  };

  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: ADMIN_REGISTRATION_RESET });
    
  }

  if (success) {
    toast({
      title: "Success",
      description: "User Registration Successful",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: ADMIN_LOGIN_RESET });
    dispatch({ type: ADMIN_REGISTRATION_RESET });
    navigate("/login")
    
    
  }

  useEffect(() => {
    if (adminInfo) {
      navigate("/log");
    }
  }, [adminInfo, navigate]);

    return (
        <div className={styles.customPadding_}>
           <div className={styles.container}>
          {msg && (
            <Alert status="warning">
              <AlertIcon />
              All Fields are Required!
            </Alert>
          )}
          {pmsg && (
            <Alert status="error">
              <AlertIcon />
              Password does not match
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
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
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
                type="text"
                onChange={(e) => setFloor(e.target.value)}
                value={floor}
              />
            </div>
            <div className={styles.inputContainer2_}>
              <label>Office Number</label>
              <input
                type="number"
                onChange={(e) => setOfficeNumber(e.target.value)}
                value={officeNumber}
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
                  className={`${styles.btn} ${styles.green}`}
                />
              )}
            </div>
            <div className={`${styles.inputContainer_3} ${styles.center}`}>
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

