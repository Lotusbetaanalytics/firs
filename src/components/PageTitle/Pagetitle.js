import React, { useEffect } from "react";
import "./pagetitle.css";
import { useNavigate } from "react-router-dom";
const PageTitle = (props) => {
  const adminToken = JSON.parse(localStorage.getItem("adminInfo"));

  const navigate = useNavigate();
  useEffect(() => {
    console.log(adminToken);
    if (!adminToken) {
      navigate("/admin/login");
    }
  }, [navigate, adminToken]);
  const date = new Date();

  let greeting = "";

  if (date.getHours() >= 12 || date.getHours() === 16) {
    greeting = "Good Afternoon!";
  } else if (date.getHours() >= 17 || date.getHours() === 22) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Morning!";
  }
  return (
    <div className="page__heading">
      <h1>{greeting}</h1>
      <h3>{props.heading}</h3>
    </div>
  );
};

export default PageTitle;
