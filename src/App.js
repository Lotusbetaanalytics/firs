import React from "react";
import Header from "./component/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./screen/adminScreens/login";
import Register from "./screen/adminScreens/register";
import Log from "./screen/adminScreens/log";
import AdminForgot from "./screen/adminScreens/adminForgot";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/login" element = {<Login/>}/>
       <Route path="/register" element = {<Register/>}/>
       <Route path="/log" element = {<Log/>}/>
       <Route path="/adminForgot" element = {<AdminForgot/>}/>
      </Routes>
     </BrowserRouter>
  )
};

export default App;
