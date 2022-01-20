import React from "react";
import Header from "./component/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./screen/login";
import Register from "./screen/register";
import Log from "./screen/log";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/login" element = {<Login/>}/>
       <Route path="/register" element = {<Register/>}/>
       <Route path="/log" element = {<Log/>}/>
      </Routes>
     </BrowserRouter>
  )
};

export default App;
