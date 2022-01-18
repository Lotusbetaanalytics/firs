import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import PageTitle from "../../components/PageTitle/Pagetitle";
import Chart from "../../components/Chart/Chart";
import Navbar from "../../components/Navbar/Navbar";
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
      <div>
        <Navbar />
      </div>
      <div className="dashboard__container">
        <div className="dashboard__title__cards">
          <PageTitle heading="Dashboard" />
          <div className="cards">
            <DashboardCard
              number={2}
              icon={<FaWalking />}
              color="teal"
              path="/admin/vistors"
            >
              Visitors today
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaBusAlt />}
              color="purple"
              path="/admin/pending"
            >
              Pending Visitors today
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaCheck />}
              color="orange"
              path="/admin/checkedin"
            >
              Checked-In Today
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaShare />}
              color="pink"
              path="/admin/checkedout"
            >
              Checked-Out
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaBriefcase />}
              color="green"
              path="/admin/prebookedguests"
            >
              PreBooked Guests
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaRegCalendarAlt />}
              color="yellow"
              path="/admin/allvistors"
            >
              All Visitors
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaUsers />}
              color="blue"
              path="/admin/allstaff"
            >
              All Staff
            </DashboardCard>
            <DashboardCard
              number={2}
              icon={<FaUsersCog />}
              path="/admin/admins"
            >
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
