import React from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiCheckCircle, FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { addNewGuest } from "../../redux/actions/vmsActions";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import { FIRST_TIME_GUEST_RESET } from "../../redux/constants/vmsConstants";

const VerifyInfo = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const BasicInfo = JSON.parse(localStorage.getItem("BasicInfo"));
  const LaptopInfo = JSON.parse(localStorage.getItem("LaptopInfo"));
  const HostInfo = JSON.parse(localStorage.getItem("HostInfo"));
  const photo = localStorage.getItem("photo");
  const { fullname, company, email, mobile } = BasicInfo;
  const { laptop, lsn } = LaptopInfo;
  const { host, purpose, appointment, date, timeIn } = HostInfo;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addNewGuest(
        fullname,
        company,
        email,
        mobile,
        laptop,
        lsn,
        host,
        purpose,
        appointment,
        photo,
        timeIn,
        date
      )
    );
  };

  const newGuest = useSelector((state) => state.newGuest);
  const { loading, error, success } = newGuest;
  if (success) {
    navigate("/success");
    dispatch({ type: FIRST_TIME_GUEST_RESET });
  }

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          {loading ? (
            <h3>Submiting Information</h3>
          ) : (
            <>
              <h3>Verify your Information</h3>
              <Slider size="100" />
              <form onSubmit={submitHandler}>
                {error && (
                  <Alert status="error">
                    <AlertIcon />
                    {error}
                  </Alert>
                )}
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={styles.accordion}>
                        <Box flex="1" textAlign="left">
                          Basic Information
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        <b>Name: </b> {fullname}
                      </p>
                      <p>
                        <b>Company: </b> {company}
                      </p>
                      <p>
                        <b>Email: </b> {email}
                      </p>
                      <p>
                        <b>Mobile: </b> {mobile}
                      </p>
                      <br />
                      <Link to="/newGuest" className={`${styles.dangerBtn}`}>
                        Edit <FiEdit />
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton className={styles.accordion}>
                        <Box flex="1" textAlign="left">
                          Laptop Information
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        <b>Laptop: </b> {laptop}
                      </p>
                      <p>
                        <b>Laptop SN: </b> {lsn}
                      </p>
                      <br />
                      <Link to="/laptop" className={`${styles.dangerBtn}`}>
                        <FiEdit /> Edit
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton className={styles.accordion}>
                        <Box flex="1" textAlign="left">
                          Host Information
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        <b>Host: </b> {host}
                      </p>
                      <p>
                        <b>Purpose of Visit: </b> {purpose}
                      </p>
                      <p>
                        <b>Do you have an appointment: </b> {appointment}
                      </p>
                      <p>
                        <b>Date: </b> {date}
                      </p>
                      <p>
                        <b>Time: </b> {timeIn}
                      </p>
                      <br />
                      <Link to="/host" className={`${styles.dangerBtn}`}>
                        <FiEdit /> Edit
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <div className={styles.inputContainer}>
                  <button
                    type="submit"
                    className={`${styles.customBtn} ${styles.green}`}
                    style={{ margin: "0 auto" }}
                    value="Next"
                  >
                    <FiCheckCircle /> Submit Information
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyInfo;
