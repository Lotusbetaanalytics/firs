import React from "react";
import "./pagetitle.css";
const PageTitle = (props) => {
  const date = new Date();

  let greeting = "";

  if (date.getHours() === 12 || date.getHours() <= 16) {
    greeting = "Good Afternoon!";
  } else if (date.getHours() === 17 || date.getHours() <= 22) {
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
