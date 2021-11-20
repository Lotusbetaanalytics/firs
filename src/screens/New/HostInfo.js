import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { getNewEmployee } from "../../redux/actions/adminActions";
import { Alert, AlertIcon } from "@chakra-ui/react";

const HostInfo = () => {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("HostInfo"));

  const [host, setHost] = useState(data ? data.host : "");
  const [purpose, setPurpose] = useState(data ? data.purpose : "");
  const [appointment, setAppointment] = useState(data ? data.appointment : "");
  const [edate, setEDate] = useState(data ? data.date : "");
  const [time, setTime] = useState(data ? data.timeIn : "");
  const [msg, setMsg] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!host || !purpose || !appointment || !edate || !time) {
      setMsg(true);
    } else {
      const date = new Date(edate).toJSON().slice(0, 10).replace(/-/g, "/");
      const timeIn = time;
      const hostInfo = { host, purpose, appointment, date, timeIn };
      localStorage.setItem("HostInfo", JSON.stringify(hostInfo));
      navigate("/snapshot");
    }
  };
  const dispatch = useDispatch();
  const getStaff = useSelector((state) => state.getStaff);
  const { staff } = getStaff;

  useEffect(() => {
    const laptop = JSON.parse(localStorage.getItem("LaptopInfo"));
    if (!laptop) {
      navigate("/laptop");
    } else {
      dispatch(getNewEmployee());
    }
  }, [navigate, dispatch]);

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Host Details</h3>
          <Slider size="75" />
          <form onSubmit={submitHandler}>
            {msg && (
              <Alert status="warning">
                <AlertIcon />
                All Fields are required!
              </Alert>
            )}
            <div className={styles.inputContainer}>
              <label>Whom are you here to see?</label>
              <select
                type="text"
                className="form-control"
                onChange={(e) => setHost(e.target.value)}
              >
                <option>
                  {data ? data.host : "Whom are you here to see?"}
                </option>
                {staff &&
                  staff.map((item, i) => (
                    <option value={item._id} key={i}>
                      {item.firstname + " " + item.lastname}
                    </option>
                  ))}
              </select>
            </div>

            <div className={styles.inputContainer}>
              <label>Purpose of Visit</label>
              <select
                type="text"
                className="form-control"
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option>
                  {data ? data.purpose : "Select Purpose of Visit"}
                </option>
                <option value="Personal">Personal</option>
                <option value="Official">Official</option>
              </select>
            </div>
            <div className={styles.inputContainer}>
              <label>Do you have an appointment</label>
              <select
                type="text"
                className="form-control"
                onChange={(e) => setAppointment(e.target.value)}
              >
                <option>
                  {data ? data.appointment : "Do you have an appointment"}
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className={styles.inputContainer}>
              <label>When would you be coming</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setEDate(e.target.value)}
                placeholder="Date"
                value={edate}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>What Time</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => setTime(e.target.value)}
                placeholder="Time"
                value={time}
              />
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.left}>
                <Link
                  to="/laptop"
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
        </div>
      </div>
    </div>
  );
};

export default HostInfo;
