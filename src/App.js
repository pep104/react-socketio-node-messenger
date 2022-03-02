import React from "react";
import { Auth, Home } from './pages'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="*" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
