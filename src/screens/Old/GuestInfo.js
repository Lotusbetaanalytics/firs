import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { useSelector } from "react-redux";
import {
  Alert,
  AlertIcon,
  Center,
  CircularProgress,
  Box,
} from "@chakra-ui/react";

const OldGuestInfo = () => {
  let navigate = useNavigate();

  const returningGuest = useSelector((state) => state.returningGuest);
  const { loading, error, success, returning } = returningGuest;

  useEffect(() => {
    if (!success) {
      navigate("/returningGuest");
    }
  }, [navigate, success]);

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Welcome Back {returning && returning.fullname}</h3>
          {loading ? (
            <>
              <Center>
                <CircularProgress isIndeterminate color="green.300" />
              </Center>
            </>
          ) : (
            <>
              <Slider size="25" />
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Box className={styles.box}>
                <div className={styles.circle}>
                  <img src={returning && returning.photo} alt="User DP" />
                </div>
                <p>
                  <b>Name: </b> {returning && returning.fullname}
                </p>
                <p>
                  <b>Company: </b> {returning && returning.company}
                </p>
                <p>
                  <b>Email: </b> {returning && returning.email}
                </p>
                <p>
                  <b>Mobile: </b> {returning && returning.mobile}
                </p>
                <br />
                <Link
                  to="/returningGuest/laptop"
                  className={`${styles.customBtn} ${styles.green}`}
                >
                  Proceed
                </Link>
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OldGuestInfo;
