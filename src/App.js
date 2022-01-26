import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnterToken from "./screens/EnterToken";
import HomePage from "./screens/HomePage";
import TokenSuccess from "./screens/TokenSuccess";
import TokenDetails from "./screens/TokenDetails";
import CheckOutSuccess from "./screens/CheckOutSuccess";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entertoken" element={<EnterToken />} />
          <Route path="/tokensuccess" element={<TokenSuccess />} />
          <Route path="/gettokeninfo" element={<TokenDetails />} />
          <Route path="/checkoutsuccess" element={<CheckOutSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
