import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import PageTitle from "../../components/PageTitle/Pagetitle";
import Chart from "../../components/Chart/Chart";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
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
import { getDashboard } from "../../redux/actions/dashboardActions/dashboard.actions";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [visitorsToday, setVisitorsToday] = useState(null);
  const [allStaff, setAllStaff] = useState(null);
  const [allAdmin, setAllAdmin] = useState(null);
  const [preBookedGuests, setPreBookedGuests] = useState(null);
  const [checkedIn, setCheckedIn] = useState(null);
  const [checkedOut, setCheckedOut] = useState(null);
  const [pendingVisitors, setPendingVisitors] = useState(null);

  const { data, success } = useSelector((state) => {
    return state.dashboard;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setVisitorsToday(data.data.todaysPrebooks.length);
      setPreBookedGuests(data.data.allPrebooks.length);
      setAllStaff(data.data.allStaff.length);
      setAllAdmin(data.data.allAdmin.length);
      setCheckedIn(data.data.todaysCheckedInPrebooks.length);
      setCheckedOut(data.data.todaysCheckedOutPrebooks.length);
      setPendingVisitors(data.data.todaysPendingPrebooks.length);
    }
  }, [success, data]);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div className="dashboard__container">
        <div className="dashboard__title__cards">
          <PageTitle heading="See what your Dashboard looks like today." />
          <div className="cards">
            <DashboardCard
              number={visitorsToday}
              icon={<FaWalking />}
              color="teal"
              path="/admin/vistors"
            >
              Visitors today
            </DashboardCard>
            <DashboardCard
              number={pendingVisitors}
              icon={<FaBusAlt />}
              color="purple"
              path="/admin/pending"
            >
              Pending Visitors today
            </DashboardCard>
            <DashboardCard
              number={checkedIn}
              icon={<FaCheck />}
              color="orange"
              path="/admin/checkedin"
            >
              Checked-In Today
            </DashboardCard>
            <DashboardCard
              number={checkedOut}
              icon={<FaShare />}
              color="pink"
              path="/admin/checkedout"
            >
              Checked-Out
            </DashboardCard>
            <DashboardCard
              number={visitorsToday}
              icon={<FaBriefcase />}
              color="green"
              path="/admin/prebookedguests"
            >
              PreBooked Guests
            </DashboardCard>
            <DashboardCard
              number={preBookedGuests}
              icon={<FaRegCalendarAlt />}
              color="yellow"
              path="/admin/allvistors"
            >
              All Visitors
            </DashboardCard>
            <DashboardCard
              number={allStaff}
              icon={<FaUsers />}
              color="blue"
              path="/admin/allstaff"
            >
              All Staff
            </DashboardCard>
            <DashboardCard
              number={allAdmin}
              icon={<FaUsersCog />}
              path="/admin/admins"
              color="red"
            >
              Available Admins
            </DashboardCard>
          </div>
        </div>

        <div className="chart">
          <Chart
            visitors={visitorsToday}
            pending={pendingVisitors}
            checkedin={checkedIn}
            checkedout={checkedOut}
            allVisitors={preBookedGuests}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
