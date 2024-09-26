import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
