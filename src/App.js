import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnterToken from "./screens/EnterToken";
import HomePage from "./screens/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entertoken" element={<EnterToken />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
