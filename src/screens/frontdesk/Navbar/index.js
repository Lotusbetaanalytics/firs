import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../../assets/logo.png";
import {
  AiFillAppstore,
  AiOutlineUserSwitch,
  AiOutlineSchedule,
  AiOutlineVerified,
  AiOutlineLogout,
  AiFillCheckCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/adminActions";
import { BiWalk, BiLoader, BiUserMinus, BiX } from "react-icons/bi";

const Navbar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  const [expand, setExpand] = useState(false);
  const [elogs, setElogs] = useState(false);

  const expandHandler = () => {
    setExpand(true);
  };
  const collapseHandler = () => {
    setExpand(false);
  };

  const expandLogs = () => {
    setElogs(true);
  };
  const collapseLogs = () => {
    setElogs(false);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.url}>
        <ul>
          <li>
            <Link to="/frontdesk/dashboard">
              <AiFillAppstore /> Dashboard
            </Link>
          </li>
          {expand ? (
            <li className={styles.open} onClick={collapseHandler}>
              <span>
                <AiOutlineUserSwitch />
                Guest
              </span>
            </li>
          ) : (
            <li onClick={expandHandler}>
              <span>
                <AiOutlineUserSwitch />
                Guest
              </span>
            </li>
          )}

          <div className={expand ? styles.showGuest : styles.hideGuest}>
            <ul>
              <li>
                <Link to="/frontdesk/newGuest">
                  <AiOutlineUserSwitch /> New Guest
                </Link>
              </li>
              <li>
                <Link to="/frontdesk/awaitingHost">
                  <BiLoader />
                  Awaiting Host
                </Link>
              </li>
              <li>
                <Link to="/frontdesk/approved">
                  <AiFillCheckCircle /> Approved Guest
                </Link>
              </li>
              <li>
                <Link to="/frontdesk/checkedin">
                  <BiWalk />
                  CheckedIN
                </Link>
              </li>
              <li>
                <Link to="/frontdesk/checkedout">
                  <BiUserMinus />
                  CheckedOut
                </Link>
              </li>
              <li>
                <Link to="/frontdesk/rejected">
                  <BiX />
                  Rejected Guest
                </Link>
              </li>
            </ul>
          </div>

          {elogs ? (
            <li className={styles.open} onClick={collapseLogs}>
              <span>
                <AiOutlineSchedule />
                Logs
              </span>
            </li>
          ) : (
            <li onClick={expandLogs}>
              <span>
                <AiOutlineSchedule />
                Logs
              </span>
            </li>
          )}

          <div className={elogs ? styles.showLogs : styles.hideLogs}>
            <ul>
              <li>
                <Link to="/frontdesk/logs/today">
                  <AiOutlineSchedule />
                  Today
                </Link>
              </li>
              <li>
                <Link to="/frontdesk/logs">
                  <AiOutlineSchedule />
                  All Logs
                </Link>
              </li>
            </ul>
          </div>
          <li>
            <Link to="/frontdesk/admin">
              <AiOutlineVerified /> Add Admin
            </Link>
          </li>
          <li>
            <Link to="/frontdesk/staff">
              <AiOutlineVerified /> Add Staff
            </Link>
          </li>
          <li>
            <Link to="/frontdesk/prebook">
              <AiOutlineVerified /> Prebook Guest
            </Link>
          </li>
          <li>
            <Link to="/frontdesk/#logout" onClick={logoutUser}>
              <AiOutlineLogout /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
