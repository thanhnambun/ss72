import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./homepage/admin/Admin";

export default function App() {
  return (
    <div>
      App
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}
