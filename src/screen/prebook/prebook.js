import React from "react";
import { TextField, Button } from "@material-ui/core";
import { FaCaretRight } from "react-icons/fa";
import PageTitle from "../../components/PageTitle/Pagetitle";
import "./prebook.css";

const Prebook = () => {
  return (
    <div className="Prebook__container">
      <div className="prebook__navbar"></div>
      <div className="heading__form">
        <div className="prebook__pagetitle">
          <PageTitle heading="Prebook a Guest" />
        </div>
        <form className="inputfields" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Company" variant="outlined" />
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Mobile" variant="outlined" />
          <TextField id="outlined-basic" label="Host" variant="outlined" />
          <TextField type="date" variant="outlined" />
          <TextField variant="outlined" id="time" type="time" />
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaCaretRight />}
          >
            Prebook Guest
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Prebook;
