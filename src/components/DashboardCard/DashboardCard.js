import { IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./dashboardcard.css";

const DashboardCard = (props) => {
  return (
    <Link to={props.path}>
      <div className="dashboard_card_container">
        <IconButton icon={props.icon} colorScheme={props.color} size="lg" />
        <div>
          <h3>{props.number}</h3>
          <h3>{props.children}</h3>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
