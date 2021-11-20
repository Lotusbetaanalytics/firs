import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Center } from "@chakra-ui/layout";
import { FiCheckCircle } from "react-icons/fi";
const Success = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("BasicInfo");
      localStorage.removeItem("LaptopInfo");
      localStorage.removeItem("HostInfo");
      localStorage.removeItem("photo");
      navigate("/");
    }, 10000);
  }, [navigate]);

  return (
    <div>
      <Navigation />
      <div className={styles.contentx}>
        <div className={styles.formPadding} style={{ textAlign: "center" }}>
          <Center>
            <h1
              className="text-center text-success"
              style={{ fontSize: "10rem", color: "green" }}
            >
              <FiCheckCircle />
            </h1>
          </Center>

          <h3>You request has been sent successfully!</h3>
          <p>
            You would get an email from your host once your request has been
            confirmed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
