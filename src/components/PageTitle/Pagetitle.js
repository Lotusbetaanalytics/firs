import React from "react";
import "./pagetitle.css";
const PageTitle = (props) => {
  return (
    <div className="page__heading">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default PageTitle;
