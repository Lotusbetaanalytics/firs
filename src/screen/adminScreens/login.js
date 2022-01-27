import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Alert, AlertIcon, useToast, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_LOGIN_RESET } from "../../redux/constants_/adminConstants";
import { useEffect } from "react";
import { loginAdmin } from "../../redux/actions_/adminActions";
import Input from "../../components/Input/input";
import Header from "../../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(loginAdmin(email, password));
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
    dispatch({ type: ADMIN_LOGIN_RESET });
  }

  useEffect(() => {
    if (adminInfo) {
      navigate("/admin/dashboard");
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
          <div className={styles.mdForm}>
            <form onSubmit={loginHandler}>
              <Input
                label={`Email`}
                type={`text`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                label={`Password`}
                type={`password`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span className={styles.forget}>
                <Link to="/adminForgot">Forgot Password?</Link>
              </span>
              <div className={styles.inputContainer2_}>
                <label style={{ visibility: "hidden" }}>Login</label>
                {loading ? (
                  <Button
                    isLoading
                    loadingText="Validating Credentials..."
                    colorScheme="wine"
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
              <div className={styles.text2}>
                Don't Have an account? <Link to="/admin/register"> Register </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
