import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "./styles.module.css";
import {
  CircularProgress,
  Alert,
  AlertIcon,
  Center,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { STAFF_REG_RESET } from "../../redux/constants/adminConstants";
import { addNewEmployee } from "../../redux/actions/adminActions";

const Staff = () => {
  const toast = useToast();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const addStaff = useSelector((state) => state.addStaff);
  const { loading, error, success } = addStaff;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewEmployee(fullname, email, mobile));
  };
  if (success) {
    toast({
      title: "Notification",
      description: "Staff has been added",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: STAFF_REG_RESET });
  }

  return (
    <div>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <small>Add Staff</small>
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
              <div className={styles.rows}>
                <div className={styles.formContainer}>
                  <label>Name</label>
                  <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className={styles.formContainer}>
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label>Mobile</label>
                  <input
                    type="tel"
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className={styles.formContainer}>
                  <label style={{ visibility: "hidden" }}>Submit</label>
                  <Button colorScheme="teal" type="submit" isFullWidth>
                    Add Staff
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
