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
          <TextField
            id="outlined-basic"
            label="Guest Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Purpose of visit"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="email"
            label="Guest Email"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Mobile" variant="outlined" />
          <TextField id="outlined-basic" label="Host" variant="outlined" />
          <TextField type="date" variant="outlined" />
          <TextField variant="outlined" id="time" type="time" />
          <Button
            variant="contained"
            color="primary"
            endIcon={<FaCaretRight />}
          >
            Prebook Guest
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Prebook;
