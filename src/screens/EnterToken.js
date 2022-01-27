import React, { useState } from "react";
import Header from "../components/Header";
import vectorPic from "../assets/vectorPic.jpg";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userToken } from "../redux/action/userTokenAction";
import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function EnterToken() {
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tokenUser = useSelector((state) => state.tokenUser);
  const { success, error, loading } = tokenUser;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!token) {
      setMsg(true);
    } else {
      setMsg(false);
      dispatch(userToken(token, navigate));
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.app}>
        <div className={styles.Tokencenter}>
          <div className={styles.tokenpic}>
            <img src={vectorPic} alt="Token" />
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            {msg && (
              <Alert status="error">
                <AlertIcon />
                Please Enter Token
              </Alert>
            )}
            {success && (
              <Alert status="success">
                <AlertIcon />
                Success
              </Alert>
            )}
          </div>

          {loading ? (
            <Center>
              <CircularProgress
                isIndeterminate
                color="red.300"
                thickness="12px"
              />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.inputContainer}>
                {/* <label>Enter Token</label> */}
                <input
                  type="text"
                  onChange={(e) => setToken(e.target.value)}
                  value={token}
                  placeholder="Enter Token"
                />
              </div>
              <button type="submit" className={styles.btn2}>
                Proceed
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnterToken;
