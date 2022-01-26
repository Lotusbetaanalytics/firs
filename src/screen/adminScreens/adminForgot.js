import { Alert, AlertIcon, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adminForgetpassword } from "../../redux/actions_/adminActions";
import styles from "./styles.module.css";
import Input from "../../components/Input/input";

const AdminForgot = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const forgetPassword = useSelector((state) => state.forgetPassword);
  const { loading, error, success } = forgetPassword;

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(adminForgetpassword(email));
  };
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
  if (success) {
    toast({
      title: "Success",
      description: "Email sent Successfully,check your mail",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/login");
  }

  return (
    <div className={styles.customPadding_}>
      <div className={styles.container}>
        <div className={styles.mdForm}>
          <form onSubmit={loginHandler}>
            {/* <div className={styles.inputContainer_}>
                <label>Email Address</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div> */}
            <Input
              label={`Email`}
              type={`text`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className={styles.forget2}>
              <Link to="/login">Remember your Password?</Link>
            </span>
            <div className={styles.inputContainer_}>
              <label style={{ visibility: "hidden" }}>Login</label>
              {success && (
                <Alert status="success">
                  <AlertIcon />
                  Check your Email to Retrieve your password
                </Alert>
              )}
              {loading ? (
                <Button
                  isLoading
                  loadingText="Sending a mail to you..."
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
            <div className={styles.text2}>
              Don't Have an account? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminForgot;
