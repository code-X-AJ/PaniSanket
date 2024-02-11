import React from "react";
import { Routes, Route } from "react-router-dom";
import authRoutes from "./authRoutes.js";

function AllRoutes() {
  return (
    <Routes>
      {
        authRoutes.map((item) => (
          <Route path={item.path} element={item.name} />
        ))
      }
    </Routes>
  );
}

export default AllRoutes;
