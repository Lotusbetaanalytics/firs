import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { validatePrebook } from "../../redux/actions/guestActions";
import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";

const PrebookedGuest = () => {
  let navigate = useNavigate();

  const [token, setToken] = useState("");
  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!token) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(validatePrebook(token));
    }
  };
  const sbook = useSelector((state) => state.sbook);
  const { loading, error, success } = sbook;

  if (success) {
    navigate("/prebooked/userInfo");
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
                  <label>Enter Token</label>
                  <input
                    type="tel"
                    className="form-control"
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="Enter Token"
                    value={token}
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

export default PrebookedGuest;
