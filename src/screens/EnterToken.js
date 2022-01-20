import React, { useState } from "react";
import Header from "../components/Header";
import vectorPic from "../assets/vectorPic.jpg";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userToken } from "../redux/action/userTokenAction";
import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";

function EnterToken() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userToken(token));
  };

  const tokenUser = useSelector((state) => state.tokenUser);
  const { success, error, loading } = tokenUser;

  return (
    <div>
      <Header />
      <div className={styles.app}>
        <div className={styles.Tokencenter}>
          <div className={styles.tokenpic}>
            <img src={vectorPic} alt="Token" />
          </div>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {success && (
            <Alert status="success">
              <AlertIcon />
            </Alert>
          )}

          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="purple.300" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.inputContainer}>
                <label>Enter Token</label>
                <input
                  type="number"
                  onChange={(e) => setToken(e.target.value)}
                  value={token}
                  placeholder="Enter Token"
                />
              </div>
              <button type="submit" className={styles.btn2}>
                Submit Token
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnterToken;
