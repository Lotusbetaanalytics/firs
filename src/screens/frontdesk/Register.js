import React, { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import progress from "../../assets/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/adminActions";
import { Center } from "@chakra-ui/layout";

const Register = ({ history }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMsg("Password does not match");
    } else {
      dispatch(register(firstname, lastname, email, password));
    }
  };
  const adminregister = useSelector((state) => state.adminregister);
  const { loading, error, success } = adminregister;
  if (success) {
    history.push("/frontdesk");
  }
  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.loginContainer}>
        <h1>Register</h1>
        {loading ? (
          <Center>
            <img src={progress} alt="loading" />
          </Center>
        ) : (
          <form onSubmit={submitHandler}>
            {msg}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className={styles.inputContainer}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                placeholder="First Name"
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                placeholder="Last Name"
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>

            <div className={styles.inputContainer}>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm Password"
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="submit"
                className="btn btn-success form-control"
                value="Register"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
