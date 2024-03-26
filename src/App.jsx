import React from "react";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SignupPage from "./Components/SignupPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};
export default App;
