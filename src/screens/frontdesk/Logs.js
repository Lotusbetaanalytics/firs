import React, { useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./styles.module.css";
import {
  CircularProgress,
  Alert,
  AlertIcon,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getlogs } from "../../redux/actions/logActions";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Logs = () => {
  const dispatch = useDispatch();

  const vmslogs = useSelector((state) => state.vmslogs);
  const { allLogs, loading, error } = vmslogs;

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
          <small>All Logs</small>
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
            {allLogs && allLogs.length <= 0 ? (
              <>
                <Alert status="warning">
                  <AlertIcon />
                  No Guest Available
                </Alert>
              </>
            ) : (
              <>
                <Button colorScheme="teal">
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Visitors Log"
                    sheet="tablexls"
                    buttonText="Download as XLS"
                  />
                </Button>
                <Table variant="simple" id="table-to-xls">
                  <TableCaption>All Logs</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>S/N</Th>
                      <Th>DP</Th>
                      <Th>Name</Th>
                      <Th>Company</Th>
                      <Th>Email</Th>
                      <Th>Mobile</Th>
                      <Th>Date</Th>
                      <Th>Status</Th>
                      <Th>TimeIn</Th>
                      <Th>TimeOut</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {allLogs &&
                      allLogs.map((item, index) => (
                        <Tr key={index}>
                          <Td>{index + 1}</Td>
                          <Td>
                            <img
                              src={item.photo}
                              alt={item.user.fullname}
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                              }}
                            />
                          </Td>
                          <Td>{item.user.fullname}</Td>
                          <Td>{item.user.company}</Td>
                          <Td>{item.user.email}</Td>
                          <Td>{item.user.mobile}</Td>
                          <Td>{item.date}</Td>
                          <Td>{item.status}</Td>
                          <Td>{item.timeIn}</Td>
                          <Td>{item.timeOut}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Logs;
