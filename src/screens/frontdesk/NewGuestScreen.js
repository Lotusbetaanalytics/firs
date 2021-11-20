import React, { useEffect } from "react";
import Capsules from "./UI/Capsules";
import Navbar from "./Navbar";
import styles from "./styles.module.css";
import { CircularProgress, Alert, AlertIcon, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getlogs } from "../../redux/actions/logActions";

const NewGuestScreen = () => {
  const dispatch = useDispatch();

  const vmslogs = useSelector((state) => state.vmslogs);
  const { newGuest, loading, error } = vmslogs;

  useEffect(() => {
    var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    dispatch(getlogs(date));

    //dispatch(getAdminDetails());
  }, [dispatch]);

  //   const vmslogs = useSelector((state) => state.vmslogs);
  //   const { logs } = vmslogs;
  return (
    <div>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <small>Pending Guests</small>
        </div>
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        ) : (
          <div className={styles.guestContainer}>
            {error && (
              <Alert>
                <AlertIcon />
                {error}
              </Alert>
            )}
            {newGuest && newGuest.length <= 0 ? (
              <>
                <Alert status="warning">
                  <AlertIcon />
                  No Guest Available
                </Alert>
              </>
            ) : (
              <div className={styles.cardGrid}>
                {newGuest &&
                  newGuest.map((item, index) => (
                    <Capsules
                      user={item}
                      key={index}
                      url={`guest/${item._id}`}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewGuestScreen;