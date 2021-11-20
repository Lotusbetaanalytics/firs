import React, { useState, useEffect } from "react";
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
import { prebookNewGuest } from "../../redux/actions/guestActions";
import { PREBOOK_RESET } from "../../redux/constants/guestConstants";
import { getNewEmployee } from "../../redux/actions/adminActions";

const PreebookGuest = () => {
  const toast = useToast();
  const [fullname, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [host, setHost] = useState("");
  const [timeIn, setTime] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const book = useSelector((state) => state.book);
  const { loading, error, success } = book;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      prebookNewGuest(fullname, company, email, mobile, host, timeIn, date)
    );
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
  const getStaff = useSelector((state) => state.getStaff);
  const { staff } = getStaff;

  useEffect(() => {
    dispatch(getNewEmployee());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <small>Pre-Book a Guest</small>
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
                  <label>Company</label>
                  <input
                    type="text"
                    onChange={(e) => setCompany(e.target.value)}
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
                  <label>Host</label>
                  <select
                    type="text"
                    className="form-control"
                    onChange={(e) => setHost(e.target.value)}
                  >
                    <option>{"Select Host"}</option>
                    {staff &&
                      staff.map((item, i) => (
                        <option value={item.email} key={i}>
                          {item.fullname}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={styles.formContainer}>
                  <label>Date</label>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label>Time</label>
                  <input
                    type="time"
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className={styles.formContainer}>
                  <label style={{ visibility: "hidden" }}>Submit</label>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isFullWidth
                    style={{ padding: "1rem 2rem" }}
                  >
                    Prebook
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

export default PreebookGuest;
