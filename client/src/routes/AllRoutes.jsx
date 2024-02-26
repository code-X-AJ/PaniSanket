import React from "react";
import { Routes, Route } from "react-router-dom";
import authRoutes from "./authRoutes.js";

function AllRoutes() {
  return (
    <Routes>
      {
        authRoutes.map((item,index) => (
          <Route path={item.path} element={item.name} key={index} />
        ))
      }
    </Routes>
  );
}

export default AllRoutes;
