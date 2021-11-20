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

const PrebookedInfo = () => {
  let navigate = useNavigate();

  const sbook = useSelector((state) => state.sbook);
  const { loading, error, success, booked } = sbook;

  useEffect(() => {
    if (!success) {
      navigate("/prebooked");
    }
  }, [navigate, success]);

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Welcome {booked && booked.fullname}</h3>
          {loading ? (
            <>
              <Center>
                <CircularProgress isIndeterminate color="green.300" />
              </Center>
            </>
          ) : (
            <>
              <Slider size="95" />
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Box className={styles.box}>
                <p>
                  <b>Name: </b> {booked && booked.fullname}
                </p>
                <p>
                  <b>Company: </b> {booked && booked.company}
                </p>
                <p>
                  <b>Email: </b> {booked && booked.email}
                </p>
                <p>
                  <b>Mobile: </b> {booked && booked.mobile}
                </p>
                <br />
                <Link to="/#" className={`${styles.customBtn} ${styles.green}`}>
                  Notify Host
                </Link>
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrebookedInfo;
