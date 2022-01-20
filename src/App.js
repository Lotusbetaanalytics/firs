import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTokenUser from "./screens/AllTokenUser";
import EnterToken from "./screens/EnterToken";
import HomePage from "./screens/HomePage";
import TokenInfo from "./screens/TokenInfo";
import TokenSuccess from "./screens/TokenSuccess";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entertoken" element={<EnterToken />} />
          <Route path="/tokeninfo:id" element={<TokenInfo />} />
          <Route path="/tokensuccess" element={<TokenSuccess />} />
          <Route path="/getTokens" element={<AllTokenUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
