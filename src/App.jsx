import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import OtpVerification from "./Components/Auth/OtpVerfication";
import Home from "./Pages/Home/Home";
import ResidentialEstimatingPage from "./Pages/ResidentialEstimating/ResidentialEstimatingPage";
import ContactUsPage from "./Pages/ContactUS/ContactUsPage";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import BlogPage from "./Pages/Blogs/BlogPage";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/residential-estimating" element={<ResidentialEstimatingPage />}/>
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
