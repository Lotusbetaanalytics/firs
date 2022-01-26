import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterToken from "./screens/EnterToken";
import HomePage from "./screens/HomePage";
import TokenInfo from "./screens/TokenInfo";
import TokenSuccess from "./screens/TokenSuccess";
import TokenDetails from "./screens/TokenDetails";
import Dashboard from "./screen/dashboard/dashboard";
import Prebook from "./screen/prebook/prebook";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entertoken" element={<EnterToken />} />
        <Route path="/tokeninfo/:id" element={<TokenInfo />} />
        <Route path="/tokensuccess" element={<TokenSuccess />} />
        <Route path="/gettokeninfo" element={<TokenDetails />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/admin/prebook" element={<Prebook />} />
      </Routes>
    </Router>
  );
};

export default App;
