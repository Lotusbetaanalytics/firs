import React from "react";
import { TextField, Button } from "@material-ui/core";
import { FaCaretRight } from "react-icons/fa";
import PageTitle from "../../components/PageTitle/Pagetitle";
import Navbar from "../../components/Navbar/Navbar";
import "./prebook.css";

const Prebook = () => {
  return (
    <div className="Prebook__container">
      <div className="prebook__navbar">
        <Navbar />
      </div>
      <div className="heading__form">
        <div className="prebook__pagetitle">
          <PageTitle heading="Prebook a Guest" />
        </div>
        <form className="inputfields" noValidate autoComplete="off">
          <div className="date__time">
            <label htmlFor="name">Guest Name</label>
            <TextField
              id="name"
              // label="Guest Name"
              placeholder="Guest Name"
              variant="outlined"
              type="text"
            />
          </div>
          <div className="date__time">
            <label htmlFor="visit">Purpose of Visit</label>
            <TextField
              id="visit"
              placeholder="Purpose of visit"
              variant="outlined"
              type="text"
            />
          </div>
          <div className="date__time">
            <label htmlFor="email">Guest Email</label>
            <TextField
              id="email"
              type="email"
              placeholder="Guest Email"
              variant="outlined"
            />
          </div>
          <div className="date__time">
            <label htmlFor="host">Guest Mobile</label>
            <TextField
              id="mobile"
              placeholder="Guest Mobile"
              variant="outlined"
            />
          </div>
          <div className="date__time">
            <label htmlFor="host">Host</label>
            <TextField id="host" placeholder="Host" variant="outlined" />
          </div>
          <div className="date__time">
            <label htmlFor="date">Expected Date</label>
            <TextField type="date" id="date" variant="outlined" />
          </div>

          <div className="date__time">
            <label htmlFor="time">Expected Time</label>
            <TextField variant="outlined" id="time" type="time" />
          </div>
          <div className="date__time">
            <Button
              variant="contained"
              color="primary"
              endIcon={<FaCaretRight />}
            >
              Prebook Guest
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Prebook;
