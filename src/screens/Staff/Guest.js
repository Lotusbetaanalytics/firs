import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./staff.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Center,
  Alert,
  AlertIcon,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getMyVisitors } from "../../redux/actions/staffActions";
import { resMyV } from "../../redux/actions/sApprovalsActions";
import progress from "../../assets/loading.gif";
import { STAFF_R_RESET } from "../../redux/constants/sApprovalsConstants";

const MyGuest = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [res, setRes] = useState(false);
  const [edate, setEDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    dispatch(getMyVisitors());
  }, [dispatch]);

  const myVisitors = useSelector((state) => state.myVisitors);
  const { loading, error, visitors } = myVisitors;

  

  const staffR = useSelector((state) => state.staffR);
  const { loading: loadingRes, error: errorRes, success: successRes } = staffR;

  const reschedule = (id) => {
    const date = new Date(edate).toJSON().slice(0, 10).replace(/-/g, "/");
    const timeIn = time;
    dispatch(resMyV(id, date, timeIn));
  };
  if (successRes) {
    dispatch(getMyVisitors());
    dispatch({ type: STAFF_R_RESET });
    toast({
      title: "Notification",
      description: "Your Guest has been rescheduled",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.contents}>
        <div className={styles.overlay}>
          <h3>My Guest</h3>
        </div>
        <div className={styles.pagePadding}>
          <Table color="black">
            <TableCaption>My Guests</TableCaption>
            <Thead>
              <Tr>
                <Th>DP</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Mobile</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              {errorRes && (
                <Alert status="error">
                  <AlertIcon />
                  {errorRes}
                </Alert>
              )}
              <>
                {loading ? (
                  <Center>
                    <img src={progress} alt="loading" />
                  </Center>
                ) : (
                  <>
                    {visitors &&
                      visitors.map((item) => (
                        <Tr>
                          <Td>
                            <Avatar
                              name={item.user.fullname}
                              src={item.photo}
                            />
                          </Td>
                          <Td>{item.user && item.user.fullname}</Td>
                          <Td>{item.user && item.user.email}</Td>
                          <Td>{item.user && item.user.mobile}</Td>
                          <Td>{item.date}</Td>
                          <Td>{item.timeIn}</Td>
                          <Td>{item.status}</Td>
                          <Td>
                            {loadingRes ? (
                              <>
                                <Center>
                                  <img src={progress} alt="loading" />
                                </Center>
                              </>
                            ) : (
                              <>
                                <div className={styles.inputContainer}>
                                  <button
                                    type="button"
                                    className={`${styles.customBtn} ${styles.goldBtn}`}
                                    onClick={() => setRes(!res)}
                                  >
                                    Reschedule
                                  </button>
                                </div>
                                {res && (
                                  <>
                                    <div className={styles.inputContainer}>
                                      <label>Date</label>
                                      <input
                                        type="date"
                                        className="form-control"
                                        onChange={(e) =>
                                          setEDate(e.target.value)
                                        }
                                        placeholder="Date"
                                        value={edate}
                                      />
                                    </div>
                                    <div className={styles.inputContainer}>
                                      <label>Time</label>
                                      <input
                                        type="time"
                                        className="form-control"
                                        onChange={(e) =>
                                          setTime(e.target.value)
                                        }
                                        placeholder="Time"
                                        value={time}
                                      />
                                    </div>
                                    <div className={styles.inputContainer}>
                                      <button
                                        type="button"
                                        className={`${styles.customBtn} ${styles.goldBtn}`}
                                        onClick={() => reschedule(item._id)}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </>
                                )}
                              </>
                            )}
                          </Td>
                        </Tr>
                      ))}
                  </>
                )}
              </>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyGuest;
