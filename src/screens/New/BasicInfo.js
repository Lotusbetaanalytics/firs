import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { checkGuest } from "../../redux/actions/vmsActions";
import { Alert, AlertIcon } from "@chakra-ui/react";

const BasicInfo = () => {
  let navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("BasicInfo"));

  const [fullname, setFullName] = useState(data ? data.fullname : "");
  const [company, setCompany] = useState(data ? data.company : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [mobile, setMobile] = useState(data ? data.mobile : "");
  const [msg, setMsg] = useState(false);

  const verify = useSelector((state) => state.verify);
  const { error, success } = verify;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(checkGuest(email, mobile));
    if (!fullname || !company || !email || !mobile) {
      setMsg(true);
    } else {
      setMsg(false);
      if (success) {
        const basicInfo = { fullname, company, email, mobile };
        localStorage.setItem("BasicInfo", JSON.stringify(basicInfo));
        navigate("/laptop");
      }
    }
  };

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Hello there!, We need some information</h3>
          <Slider size="25" />
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
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="First Name"
                value={fullname}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Company</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
                value={company}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Email Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                value={email}
              />
            </div>
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
                <Link to="/" className={`${styles.customBtn} ${styles.white}`}>
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

export default BasicInfo;
