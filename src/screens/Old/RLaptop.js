import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const RLaptopInfo = () => {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("LaptopInfo"));

  const returningGuest = useSelector((state) => state.returningGuest);
  const { returning } = returningGuest;
  const [laptop, setLaptop] = useState(data ? data.laptop : "");
  const [lsn, setLSN] = useState(data ? data.lsn : "");
  const [question, setQuestion] = useState(data ? data.question : "");
  const [msg, setMsg] = useState(false);

  const questionHandler = (e) => {
    setQuestion(e.target.value);
    if (e.target.value === "No") {
      setLaptop("None");
      setLSN("None");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!question || !laptop || !lsn) {
      setMsg(true);
    } else {
      setMsg(false);
      const laptopInfo = { laptop, lsn, question };
      localStorage.setItem("LaptopInfo", JSON.stringify(laptopInfo));
      navigate("/returningGuest/host");
    }
  };
  useEffect(() => {
    if (!returning) {
      navigate("/returningGuest/userInfo");
    }
  }, [returning, navigate]);
  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Laptop Details</h3>
          <Slider size="50" />
          <form onSubmit={submitHandler}>
            {msg && (
              <Alert status="warning">
                <AlertIcon />
                All Fields are required!
              </Alert>
            )}
            <div className={styles.inputContainer}>
              <label>Wii you coming with a Laptop</label>
              <select
                type="text"
                className="form-control"
                onChange={questionHandler}
                placeholder="Will you be coming with a laptop"
              >
                <option value="">{data ? data.question : "Select"}</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {question === "Yes" && (
              <>
                <div className={styles.inputContainer}>
                  <label>Laptop</label>
                  <select
                    type="text"
                    className="form-control"
                    onChange={(e) => setLaptop(e.target.value)}
                    placeholder="Laptop"
                  >
                    <option>{data ? data.laptop : "Select Laptop"}</option>
                    <option value="Acer">Acer</option>
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="MSI">MSI</option>
                    <option value="Mac Book">Mac Book</option>
                  </select>
                </div>
                <div className={styles.inputContainer}>
                  <label>Laptop Serial Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLSN(e.target.value)}
                    placeholder="SN"
                    value={lsn}
                  />
                </div>
              </>
            )}

            <div className={styles.inputContainer}>
              <div className={styles.left}>
                <Link
                  to="/returningGuest/userInfo"
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

export default RLaptopInfo;
