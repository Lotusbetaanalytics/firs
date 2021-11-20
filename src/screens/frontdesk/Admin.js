import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "./styles.module.css";
import {
  CircularProgress,
  Alert,
  AlertIcon,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_REGISTER_RESET } from "../../redux/constants/adminConstants";
import { register } from "../../redux/actions/adminActions";

const AdminScreen = () => {
  const toast = useToast();
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
    toast({
      title: "Notification",
      description: "Admin has been added",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: ADMIN_REGISTER_RESET });
  }

  return (
    <div>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <small>Add Adminstrator</small>
        </div>
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        ) : (
          <div className={styles.guestContainer}>
            {error && (
              <Alert>
                <AlertIcon />
                {error}
              </Alert>
            )}
            <form onSubmit={submitHandler}>
              {msg}
              {error && <div className="alert alert-danger">{error}</div>}
              <div className={styles.rows}>
                <div className={styles.formContainer}>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    placeholder="First Name"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    placeholder="Last Name"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                </div>

                <div className={styles.formContainer}>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label style={{ visibility: "hidden" }}>Submit</label>
                  <input
                    type="submit"
                    className="btn btn-success form-control"
                    value="Register"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminScreen;
