import React, { useEffect } from "react";
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
import { getSingleGuest, notifyHost } from "../../redux/actions/guestActions";
import { Link } from "react-router-dom";
import { NOTIFY_HOST_RESET } from "../../redux/constants/guestConstants";
import gif from "../../assets/loading.gif";

const AwaitingScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const id = match.params.id;
  const singleGuest = useSelector((state) => state.singleGuest);
  const { loading, error, info } = singleGuest;

  const notifyH = useSelector((state) => state.notifyH);
  const { loading: lHost, error: eHost, success } = notifyH;

  useEffect(() => {
    dispatch(getSingleGuest(id));
  }, [dispatch, id]);

  const name = info && info.user && info.user.fullname;
  const company = info && info.user && info.user.company;
  const photo = info && info.photo;
  const host = info && info.host;

  const submitHandler = () => {
    if (!name || !company || !photo || !host) {
      alert("Host could not be notified");
    } else {
      dispatch(notifyHost(name, company, photo, host, id));
    }
  };

  if (success) {
    toast({
      title: "Notification",
      description: "Host has been Notified",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: NOTIFY_HOST_RESET });
    history.push("/frontdesk/awaitingHost");
  }

  return (
    <div>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <small>Guest Information</small>
        </div>
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        ) : (
          <>
            {error && (
              <Alert>
                <AlertIcon />
                {error}
              </Alert>
            )}

            <div className={styles.guestContainer}>
              <div className={styles.guestGrid}>
                <div className={styles.guestCard}>
                  <img src={info && info.photo} alt={info && info._id} />
                </div>
                <div className={styles.guestCard}>
                  {eHost && (
                    <Alert>
                      <AlertIcon />
                      {eHost}
                    </Alert>
                  )}

                  {lHost ? (
                    <>
                      <img src={gif} alt="Loading" />
                      <p style={{ textAlign: "center" }}>
                        Sending Request to Host
                      </p>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/frontdesk/awaitingHost"
                        className={styles.whiteBtn}
                      >
                        Go Back
                      </Link>
                      <br />
                      <br />
                      <div className={styles.titleCard}>
                        <h2>Basic Information</h2>
                      </div>
                      <p>
                        <b>Name: </b>
                        {info && info.user && info.user.fullname}
                      </p>
                      <p>
                        <b>Company: </b>
                        {info && info.user && info.user.company}
                      </p>
                      <p>
                        <b>Email: </b>
                        {info && info.user && info.user.email}
                      </p>
                      <p>
                        <b>Mobile: </b>
                        {info && info.user && info.user.mobile}
                      </p>
                      <div className={styles.titleCard}>
                        <h2>Laptop Information</h2>
                      </div>
                      <p>
                        <b>Laptop: </b>
                        {info && info.laptop}
                      </p>
                      <p>
                        <b>Laptop SN: </b>
                        {info && info.lsn}
                      </p>
                      <div className={styles.titleCard}>
                        <h2>Whom to Visit</h2>
                      </div>
                      <p>
                        <b>Host: </b>
                        {info && info.host}
                      </p>
                      <p>
                        <b>Purpose of Visit </b>
                        {info && info.purpose}
                      </p>
                      <p>
                        <b>Appointment </b>
                        {info && info.appointment}
                      </p>
                      <p>
                        <b>Time-in </b>
                        {info && info.timeIn}
                      </p>
                      <p>
                        <b>Date </b>
                        {info && info.date}
                      </p>
                      <br />
                      <Alert status="success">
                        <AlertIcon />
                        Host has been Notified
                      </Alert>{" "}
                      <br />
                      <Button colorScheme="teal" onClick={submitHandler}>
                        Notify Host Again!
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AwaitingScreen;
