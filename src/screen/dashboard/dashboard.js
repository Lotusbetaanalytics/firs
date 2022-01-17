import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import PageTitle from "../../components/PageTitle/Pagetitle";
import Chart from "../../components/Chart/Chart";
import {
  FaWalking,
  FaBusAlt,
  FaCheck,
  FaShare,
  FaBriefcase,
  FaRegCalendarAlt,
  FaUsers,
  FaUsersCog,
} from "react-icons/fa";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard__navbar"></div>
      <div className="dashboard__container">
        <div className="dashboard__title__cards">
          <PageTitle heading="Dashboard" />
          <div className="cards">
            <DashboardCard number={2} icon={<FaWalking />} color="teal">
              Visitors today
            </DashboardCard>
            <DashboardCard number={2} icon={<FaBusAlt />} color="purple">
              Pending Visitors today
            </DashboardCard>
            <DashboardCard number={2} icon={<FaCheck />} color="orange">
              Checked-In Today
            </DashboardCard>
            <DashboardCard number={2} icon={<FaShare />} color="pink">
              Checked-Out
            </DashboardCard>
            <DashboardCard number={2} icon={<FaBriefcase />} color="green">
              PreBooked Guests
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaRegCalendarAlt />}
              color="yellow"
            >
              All Visitors
            </DashboardCard>
            <DashboardCard number={2} icon={<FaUsers />} color="blue">
              All Staff
            </DashboardCard>
            <DashboardCard number={2} icon={<FaUsersCog />}>
              Available Admins
            </DashboardCard>
          </div>
        </div>

        <div className="chart">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
