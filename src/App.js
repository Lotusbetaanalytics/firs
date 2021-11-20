import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import BasicInfo from "./screens/New/BasicInfo";
import HostInfo from "./screens/New/HostInfo";
import LaptopInfo from "./screens/New/LaptopInfo";
import Snapshot from "./screens/New/Snapshot";
import VerifyInfo from "./screens/New/VerifyInfo";
import OldGuestInfo from "./screens/Old/GuestInfo";
import OldGuest from "./screens/Old/OldGuest";
import RHostInfo from "./screens/Old/RHost";
import RLaptopInfo from "./screens/Old/RLaptop";
import RSnapshot from "./screens/Old/RSnapshot";
import RVerifyInfo from "./screens/Old/RVerifyInfo";
import PrebookedGuest from "./screens/Prebooked/PreBooked";
import PrebookedInfo from "./screens/Prebooked/PreBookedInfo";
import Dashboard from "./screens/Staff/Dashboard";
import MyGuest from "./screens/Staff/Guest";
import StaffLogin from "./screens/Staff/StaffLogin";
import StaffRegister from "./screens/Staff/StaffRegister";
import Success from "./screens/Success";
import Login from "./screens/frontdesk";
import Register from "./screens/frontdesk/Register";
import FDashboard from "./screens/frontdesk/Dashboard";
import NewGuestScreen from "./screens/frontdesk/NewGuestScreen";
import PendingGuest from "./screens/frontdesk/PendingGuest";
import AwaitingHostScreen from "./screens/frontdesk/AwaitingHost";
import Logs from "./screens/frontdesk/Logs";
import TodayLogs from "./screens/frontdesk/Today";
import RejectedScreen from "./screens/frontdesk/Rejected";
import ApprovedScreen from "./screens/frontdesk/Approved";
import Checkedin from "./screens/frontdesk/Checkedin";
import CheckedOut from "./screens/frontdesk/Checkedout";
import PreebookGuest from "./screens/frontdesk/Prebook";
import Staff from "./screens/frontdesk/Staff";
import AdminScreen from "./screens/frontdesk/Admin";
import AwaitingScreen from "./screens/frontdesk/AwatingHostScreen";
import CheckinGuest from "./screens/frontdesk/CheckinGuest";
import StaffPrebook from "./screens/Staff/StaffPrebook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/newGuest" exact element={<BasicInfo />} />
        <Route path="/laptop" exact element={<LaptopInfo />} />
        <Route path="/host" exact element={<HostInfo />} />
        <Route path="/snapshot" exact element={<Snapshot />} />
        <Route path="/verifyInfo" exact element={<VerifyInfo />} />
        <Route path="/success" exact element={<Success />} />
        <Route path="/returningGuest" exact element={<OldGuest />} />
        <Route
          path="/returningGuest/userInfo"
          exact
          element={<OldGuestInfo />}
        />
        <Route path="/returningGuest/laptop" exact element={<RLaptopInfo />} />
        <Route path="/returningGuest/host" exact element={<RHostInfo />} />
        <Route path="/returningGuest/snapshot" exact element={<RSnapshot />} />
        <Route
          path="/returningGuest/verifyInfo"
          exact
          element={<RVerifyInfo />}
        />
        <Route path="/prebooked" exact element={<PrebookedGuest />} />
        <Route path="/prebooked/userInfo" exact element={<PrebookedInfo />} />
        <Route path="/staff" exact element={<StaffLogin />} />
        <Route path="/staff/create-account" exact element={<StaffRegister />} />
        <Route path="/staff/dashboard" exact element={<Dashboard />} />
        <Route path="/staff/logs" exact element={<MyGuest />} />
        <Route path="/staff/prebook" exact element={<StaffPrebook />} />
        <Route path="/frontdesk" exact element={<Login />} />
        <Route path="/frontdesk/register" exact element={<Register />} />
        <Route path="/frontdesk/staff" exact element={<Staff />} />
        <Route path="/frontdesk/admin" exact element={<AdminScreen />} />
        <Route path="/frontdesk/dashboard" exact element={<FDashboard />} />
        <Route path="/frontdesk/prebook" exact element={<PreebookGuest />} />
        <Route path="/frontdesk/newGuest" exact element={<NewGuestScreen />} />
        <Route path="/frontdesk/approved" exact element={<ApprovedScreen />} />
        <Route path="/frontdesk/rejected" exact element={<RejectedScreen />} />
        <Route path="/frontdesk/checkedin" exact element={<Checkedin />} />
        <Route path="/frontdesk/checkedout" exact element={<CheckedOut />} />
        <Route
          path="/frontdesk/awaitingHost"
          exact
          element={<AwaitingHostScreen />}
        />
        <Route path="/frontdesk/guest/:id" exact element={<PendingGuest />} />
        <Route
          path="/frontdesk/guest/awaiting/:id"
          exact
          element={<AwaitingScreen />}
        />
        <Route
          path="/frontdesk/guest/checkin/:id"
          exact
          element={<CheckinGuest />}
        />
        <Route path="/frontdesk/logs" exact element={<Logs />} />
        <Route path="/frontdesk/logs/today" exact element={<TodayLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
