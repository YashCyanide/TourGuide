import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Tours" element={<Tours />} />
      <Route path="/Tours/:id" element={<TourDetails />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
