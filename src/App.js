import React from "react";
import Header from "./component/Header";
import { Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./screen/login";
import Register from "./screen/register";
import TableComponent from "./component/table";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/login" element = {<Login/>}/>
       <Route path="/register" element = {<Register/>}/>
       <Route path="/log" element = {<TableComponent/>}/>
      </Routes>
     </BrowserRouter>
  )
};

export default App;
