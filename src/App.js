import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css"; // Add CSS styles in this file
import Home from "./components/Home";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
