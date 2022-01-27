import React from "react";
import Login from "./screen/adminScreens/login";
import Register from "./screen/adminScreens/register";
import Log from "./screen/adminScreens/log";
import AdminForgot from "./screen/adminScreens/adminForgot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterToken from "./screens/EnterToken";
import HomePage from "./screens/HomePage";
import TokenSuccess from "./screens/TokenSuccess";
import TokenDetails from "./screens/TokenDetails";
import CheckOutSuccess from "./screens/CheckOutSuccess";
import Dashboard from "./screen/dashboard/dashboard";
import Prebook from "./screen/prebook/prebook";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entertoken" element={<EnterToken />} />
        <Route path="/tokensuccess" element={<TokenSuccess />} />
        <Route path="/tokensuccess" element={<TokenSuccess />} />
        <Route path="/gettokeninfo" element={<TokenDetails />} />
        <Route path="/checkoutsuccess" element={<CheckOutSuccess />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/logs" element={<Log />} />
        <Route path="/adminForgot" element={<AdminForgot />} />
        <Route exact path="/admin/prebook" element={<Prebook />} />
      </Routes>
    </Router>
  );
};

export default App;
