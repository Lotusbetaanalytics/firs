import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import StaffCard from "../../components/UI/StaffCard";
import styles from "./staff.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMyLogs, getPendingLogs } from "../../redux/actions/staffActions";
import { AiFillAlert } from "react-icons/ai";
import {
  approveMyV,
  rejectMyV,
  resMyV,
} from "../../redux/actions/sApprovalsActions";
import progress from "../../assets/loading.gif";
import {
  STAFF_APPROVAL_RESET,
  STAFF_REJECT_RESET,
  STAFF_R_RESET,
} from "../../redux/constants/sApprovalsConstants";
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [res, setRes] = useState(false);
  const [edate, setEDate] = useState("");
  const [time, setTime] = useState("");

  const staffLogs = useSelector((state) => state.staffLogs);
  const { unique, approved, rejected, pending, prebooked } = staffLogs;

  useEffect(() => {
    dispatch(getMyLogs());
    dispatch(getPendingLogs());
  }, [dispatch]);

  const getPending = useSelector((state) => state.getPending);
  const { loading, error, visitor } = getPending;

  const staffApprove = useSelector((state) => state.staffApprove);
  const { loading: loadingA, error: errorA, success } = staffApprove;

  const staffReject = useSelector((state) => state.staffReject);
  const { loading: loadingR, error: errorR, success: successR } = staffReject;

  const staffR = useSelector((state) => state.staffR);
  const { loading: loadingRes, error: errorRes, success: successRes } = staffR;

  const approve = (id) => {
    dispatch(approveMyV(id));
  };
  const reject = (id) => {
    dispatch(rejectMyV(id));
  };
  const reschedule = (id) => {
    const date = new Date(edate).toJSON().slice(0, 10).replace(/-/g, "/");
    const timeIn = time;
    dispatch(resMyV(id, date, timeIn));
  };
  if (success) {
    dispatch(getPendingLogs());
    dispatch({ type: STAFF_APPROVAL_RESET });
    toast({
      title: "Guest Approved",
      description: "Your Guest has been approved",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  if (successR) {
    dispatch(getPendingLogs());
    dispatch({ type: STAFF_REJECT_RESET });
    toast({
      title: "Guest Rejected",
      description: "Your Guest has been rejected",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  if (successRes) {
    dispatch(getPendingLogs());
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
          <div className={styles.cardGrid}>
            <StaffCard
              title="Unique Guest"
              count={unique}
              Icon={AiFillAlert}
              color={styles.purple}
            />
            <StaffCard
              title="Pending Guest"
              count={pending}
              Icon={AiFillAlert}
              color={styles.cyan}
            />
            <StaffCard
              title="Approved Guest"
              count={approved}
              Icon={AiFillAlert}
              color={styles.red}
            />
            <StaffCard
              title="Rejected Guest"
              count={rejected}
              Icon={AiFillAlert}
              color={styles.gold}
            />
            <StaffCard
              title="Prebooked Guest"
              count={prebooked}
              Icon={AiFillAlert}
              color={styles.cyan}
            />
          </div>
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
              {errorA && (
                <Alert status="error">
                  <AlertIcon />
                  {errorA}
                </Alert>
              )}
              {errorR && (
                <Alert status="error">
                  <AlertIcon />
                  {errorR}
                </Alert>
              )}

              {loadingR ? (
                <Center>
                  <img src={progress} alt="loading" />
                </Center>
              ) : (
                <>
                  {loadingA ? (
                    <Center>
                      <img src={progress} alt="loading" />
                    </Center>
                  ) : (
                    <>
                      {loading ? (
                        <Center>
                          <img src={progress} alt="loading" />
                        </Center>
                      ) : (
                        <>
                          {visitor &&
                            visitor.map((item) => (
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
                                <Td>
                                  {!res && (
                                    <>
                                      <button
                                        type="button"
                                        className={`${styles.customBtn} ${styles.green}`}
                                        onClick={() => approve(item._id)}
                                      >
                                        Approve
                                      </button>
                                      <button
                                        type="button"
                                        className={`${styles.customBtn} ${styles.red}`}
                                        onClick={() => reject(item._id)}
                                      >
                                        Reject
                                      </button>
                                    </>
                                  )}
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
                                          <div
                                            className={styles.inputContainer}
                                          >
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
                                          <div
                                            className={styles.inputContainer}
                                          >
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
                                          <div
                                            className={styles.inputContainer}
                                          >
                                            <button
                                              type="button"
                                              className={`${styles.customBtn} ${styles.goldBtn}`}
                                              onClick={() =>
                                                reschedule(item._id)
                                              }
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
                  )}
                </>
              )}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
