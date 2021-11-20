import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./staff.module.css";
import {
  CircularProgress,
  Alert,
  AlertIcon,
  Center,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { staffPrebookedVisitors } from "../../redux/actions/staffActions";
import { PREBOOK_RESET } from "../../redux/constants/guestConstants";

const StaffPrebook = () => {
  const toast = useToast();
  const [fullname, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [timeIn, setTime] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch();

  const prebook = useSelector((state) => state.prebook);
  const { loading, error, success } = prebook;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!fullname || !company || !email || !mobile || !timeIn || !date) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(
        staffPrebookedVisitors(fullname, company, email, mobile, timeIn, date)
      );
    }
  };
  if (success) {
    toast({
      title: "Notification",
      description: "Guest has been prebooked",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: PREBOOK_RESET });
  }

  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <h3>Pre Book</h3>
        </div>
        <div className={styles.pagePadding}>
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="green.300" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              {msg && (
                <Alert status="error">
                  <AlertIcon />
                  All Fields are Required
                </Alert>
              )}
              <div className={styles.formGrid}>
                <div className={styles.inputContainer}>
                  <label>Visitor's Name</label>
                  <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Company</label>
                  <input
                    type="text"
                    onChange={(e) => setCompany(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Mobile</label>
                  <input
                    type="tel"
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className={styles.inputContainer}>
                  <label>Date</label>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Time</label>
                  <input
                    type="time"
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label style={{ visibility: "hidden" }}>Submit</label>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isFullWidth
                    style={{ padding: "1rem 2rem", height: "4rem" }}
                  >
                    Prebook
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffPrebook;
