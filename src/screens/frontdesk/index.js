import React, { useState, useEffect } from "react";
import styles from "./staff.module.css";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/actions/adminActions";
import { Center, CircularProgress } from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router";

const Login = ({ history }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(auth(email, password));
  };
  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      navigate("/frontdesk/dashboard");
    }
  }, [navigate, adminInfo]);
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
            <h3>Frontdesk Portal</h3>
            {loading ? (
              <Center>
                <CircularProgress isIndeterminate color="green.300" />
              </Center>
            ) : (
              <form onSubmit={submitHandler}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className={styles.inputContainer}>
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email Address"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
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
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
