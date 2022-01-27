import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Alert, AlertIcon, useToast, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_LOGIN_RESET,
  ADMIN_REGISTRATION_RESET,
} from "../../redux/constants_/adminConstants";
import { registerAdmin } from "../../redux/actions_/adminActions";
import Input from "../../components/Input/input";
import Header from "../../components/Header";

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
            isAdmin
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
    navigate("/login");
  }

  useEffect(() => {
    if (adminInfo) {
      navigate("/log");
    }
  }, [adminInfo, navigate]);

  return (
    <>
      <Header />
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
            <Input
              label={`First Name`}
              type={`text`}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <Input
              label={`Last Name`}
              type={`text`}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />

            <Input
              label={`Email Address`}
              type={`text`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              label={`Phone Number`}
              type={`Tel`}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />

            <Input
              label={`Department`}
              type={`text`}
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
            />

            <Input
              label={`Office Floor`}
              type={`number`}
              onChange={(e) => setFloor(e.target.value)}
              value={floor}
            />

            <Input
              label={`Office Number`}
              type={`number`}
              onChange={(e) => setOfficeNumber(e.target.value)}
              value={officeNumber}
            />

            <Input
              label={`Password`}
              type={`password`}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Input
              label={`Confirm Password`}
              type={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
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
            <div className={`${styles.inputContainer_} ${styles.center}`}>
              <div>
                Have an account? <Link to="/admin/login">Log in</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
