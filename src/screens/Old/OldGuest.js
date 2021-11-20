import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { getReturningGuest } from "../../redux/actions/vmsActions";
import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";

const OldGuest = () => {
  let navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!mobile) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(getReturningGuest(mobile));
    }
  };

  const returningGuest = useSelector((state) => state.returningGuest);
  const { loading, error, success } = returningGuest;

  if (success) {
    navigate("/returningGuest/userInfo");
  }

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Hello there!, Welcome Back</h3>
          {loading ? (
            <>
              <Center>
                <CircularProgress isIndeterminate color="green.300" />
              </Center>
            </>
          ) : (
            <>
              <Slider size="0" />
              <form onSubmit={submitHandler}>
                {error && (
                  <Alert status="error">
                    <AlertIcon />
                    {error}
                  </Alert>
                )}
                {msg && (
                  <Alert status="warning">
                    <AlertIcon />
                    All Fields are required!
                  </Alert>
                )}

                <div className={styles.inputContainer}>
                  <label>Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile"
                    value={mobile}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.left}>
                    <Link
                      to="/"
                      className={`${styles.customBtn} ${styles.white}`}
                    >
                      <FiArrowLeftCircle /> Back
                    </Link>
                  </div>
                  <div className={styles.right}>
                    <button
                      type="submit"
                      className={`${styles.customBtn} ${styles.green}`}
                      value="Next"
                    >
                      <FiArrowRightCircle /> Next
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OldGuest;
