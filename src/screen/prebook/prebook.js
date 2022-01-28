import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import PageTitle from "../../components/PageTitle/Pagetitle";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { handleChange } from "./prebook.events";
import "./prebook.css";
import Alerts from "../../components/Alerts/Alert";
import { preBookGuest } from "../../redux/actions/prebookActions/prebook.actions";
import { getDashboard } from "../../redux/actions/dashboardActions/dashboard.actions";
import { PRE_BOOK_GUEST_RESET } from "../../redux/constants";

const Prebook = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState(false);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const prebook = useSelector((state) => state.preBookReducer); //get the state of the elements in this component
  const dispatch = useDispatch();

  if (prebook.success) {
    dispatch(getDashboard());
    dispatch({ type: PRE_BOOK_GUEST_RESET });
    setMsg(true);
  }

  const handleSubmit = (event, ...state) => {
    event.preventDefault();

    setTime(time);
    dispatch(preBookGuest(...state));
    setName("");
    setDate("");
    setTime("");
    setPurpose("");
    setEmail("");
    setPhone("");
    setCompany("");
  };

  return (
    <div className="Prebook__container">
      <div className="prebook__navbar">
        <Navbar />
      </div>
      <div className="heading__form">
        <div className="prebook__pagetitle">
          <PageTitle heading="Prebook a Guest" />
        </div>
        <div
          className="alerts"
          style={{
            width: "60%",
            position: "relative",
            left: "100px",
            top: "30px",
          }}
        >
          {prebook.error ? (
            <Alerts
              message="An error occured! Please try again."
              type="error"
            />
          ) : (
            ""
          )}
          {msg ? (
            <Alerts message="Guest Pre Booked!" type="success" show={msg} />
          ) : (
            ""
          )}
        </div>

        <form
          className="inputfields"
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            handleSubmit(
              e,
              name,
              email,
              phoneNumber,
              purpose,
              company,
              date,
              time
            );
          }}
        >
          <div className="date__time">
            <label htmlFor="name">Guest Name</label>
            <TextField
              id="name"
              value={name}
              placeholder="Guest Name"
              variant="outlined"
              type="text"
              onChange={(event) => handleChange(event, setName)}
            />
          </div>
          <div className="date__time">
            <label htmlFor="visit">Purpose of Visit</label>
            <TextField
              id="visit"
              placeholder="Purpose of visit"
              variant="outlined"
              type="text"
              value={purpose}
              onChange={(event) => handleChange(event, setPurpose)}
            />
          </div>
          <div className="date__time">
            <label htmlFor="email">Guest Email</label>
            <TextField
              id="email"
              type="email"
              value={email}
              placeholder="Guest Email"
              variant="outlined"
              onChange={(event) => handleChange(event, setEmail)}
            />
          </div>
          <div className="date__time">
            <label htmlFor="host">Guest Mobile</label>
            <TextField
              id="mobile"
              placeholder="Guest Mobile"
              variant="outlined"
              type="text"
              value={phoneNumber}
              onChange={(event) => handleChange(event, setPhone)}
            />
          </div>
          <div className="date__time">
            <label htmlFor="host">Company</label>
            <TextField
              id="host"
              placeholder="Company"
              value={company}
              variant="outlined"
              onChange={(event) => {
                handleChange(event, setCompany);
              }}
            />
          </div>
          <div className="date__time">
            <label htmlFor="date">Expected Date</label>
            <TextField
              type="date-local"
              id="date"
              variant="outlined"
              value={date}
              onChange={(event) => handleChange(event, setDate)}
            />
          </div>

          <div className="date__time">
            <label htmlFor="time">Expected Time</label>
            <TextField
              variant="outlined"
              id="time"
              type="datetime-local"
              value={time}
              onChange={(event) => handleChange(event, setTime)}
            />
          </div>
          <div className="date__time">
            <Button
              animated
              disabled={
                name &&
                email &&
                company &&
                date &&
                time &&
                phoneNumber &&
                purpose
                  ? false
                  : true
              }
              type="submit"
              loading={prebook.loading}
            >
              Pre Book Guest
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Prebook;
