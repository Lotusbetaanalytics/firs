import React from "react";
import Header from "./component/Header";
import { Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./screen/login";
import Register from "./screen/register";
import Logs from "./screen/logs";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/login" element = {<Login/>}/>
       <Route path="/register" element = {<Register/>}/>
       <Route path="/log" element = {<Logs/>}/>
      </Routes>
     </BrowserRouter>
  )
};

export default App;
