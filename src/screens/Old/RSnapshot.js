import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import styles from "../styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import Webcam from "react-webcam";
import { Center } from "@chakra-ui/react";

const RSnapshot = () => {
  let navigate = useNavigate();

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem("photo", imageSrc);
    navigate("/returningGuest/verifyInfo");
  }, [webcamRef, navigate]);
  useEffect(() => {
    const photo = localStorage.getItem("photo");
    const host = JSON.parse(localStorage.getItem("HostInfo"));
    if (!host) {
      navigate("/returningGuest/host");
    }
    if (photo) {
      navigate("/returningGuest/verifyInfo");
    }
  }, [navigate]);
  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding}>
          <h3>Take a Picture 😎</h3>
          <Slider size="95" />
          <form onSubmit={capture}>
            <Center>
              <Webcam
                audio={false}
                height={500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={500}
                videoConstraints={videoConstraints}
              />
            </Center>

            <div className={styles.inputContainer}>
              <div className={styles.left}>
                <Link
                  to="/returningGuest/host"
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
                  <FiArrowRightCircle /> Take Picture
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSnapshot;
