import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnhancedTable from "./components/Table/Table";
import Dashboard from "./screen/dashboard/dashboard";
import Prebook from "./screen/prebook/prebook";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/admin/prebook" element={<Prebook />} />
        <Route exact path="/admin/logs" element={<EnhancedTable />} />
      </Routes>
    </Router>
  );
};

export default App;
