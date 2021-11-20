import React, { useEffect } from "react";
import Cards from "./UI/Cards";
import Navbar from "./Navbar";
import styles from "./styles.module.css";
import {
  IoPeopleSharp,
  IoWalk,
  IoCheckmarkCircle,
  IoArrowRedo,
  IoBriefcase,
  IoCalendarOutline,
  IoBusSharp,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getlogs } from "../../redux/actions/logActions";
import { getAdminDetails } from "../../redux/actions/adminActions";
import Push from "./UI/Push";

const FDashboard = () => {
  const dispatch = useDispatch();

  const vmslogs = useSelector((state) => state.vmslogs);
  const { logs } = vmslogs;

  useEffect(() => {
    var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    dispatch(getlogs(date));
    dispatch(getAdminDetails());
  }, [dispatch]);

  //   const vmslogs = useSelector((state) => state.vmslogs);
  //   const { logs } = vmslogs;
  return (
    <div>
      <Navbar />
      <div className={styles.contents}>
        <Push />
        <div className={styles.overlay}>
          <div className={styles.title}>
            <small>Dashboard</small>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardGrid}>
              <Cards
                title="Vistors Today"
                count={logs && logs.vtoday}
                color={styles.cyan}
              >
                <IoWalk />
              </Cards>
              <Cards
                title="Pending Visitors Today"
                count={logs && logs.pending}
                color={styles.purple}
              >
                <IoBusSharp />
              </Cards>
              <Cards
                title="Checked-In Today"
                count={logs && logs.checkedIn}
                color={styles.gold}
              >
                <IoCheckmarkCircle />
              </Cards>
              <Cards
                title="Checked-Out Today"
                count={logs && logs.checkedOut}
                color={styles.red}
              >
                <IoArrowRedo />
              </Cards>
              <Cards title="PreBooked Guests" count="5" color={styles.purple}>
                <IoBriefcase />
              </Cards>
              <Cards
                title="Total Vistors this Month"
                count="150"
                color={styles.red}
              >
                <IoPeopleSharp />
              </Cards>

              <Cards
                title="All Visitors"
                count={logs && logs.all}
                color={styles.gold}
              >
                <IoCalendarOutline />
              </Cards>

              <Cards title="Available Admin" count="3" color={styles.cyan}>
                <IoCalendarOutline />
              </Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDashboard;
