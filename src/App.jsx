import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import OtpVerification from "./Components/Auth/OtpVerfication";
import Home from "./Pages/Home/Home";
import ResidentialEstimatingPage from "./Pages/ResidentialEstimating/ResidentialEstimatingPage";
import ContactUsPage from "./Pages/ContactUS/ContactUsPage";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import BlogPage from "./Pages/Blogs/BlogPage";




import AuthLayout from "./Components/Layouts/AuthLayout";
import MainLayout from "./Components/Layouts/MainLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassword from "./Components/Auth/ResetPassword";

function App() {
  return (
     <>      
     {/* <ToastContainer position="top-right" autoClose={2000} theme="colored" /> */}

    <Router>
      <Routes>
// <<<<<<< estimators-UI

//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/residential-estimating" element={<ResidentialEstimatingPage />}/>
//         <Route path="/contactus" element={<ContactUsPage />} />
//         <Route path="/about" element={<AboutUsPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/otp-verification" element={<OtpVerification />} />

// =======
// >>>>>>> bilaldev

        {/* Auth Pages - No Navbar/Footer */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/otp-verification"
          element={
            <AuthLayout>
              <OtpVerification />
            </AuthLayout>
          }
        />
        <Route
          path="/reset-password"
          element={
            <AuthLayout>
              <ResetPassword />
            </AuthLayout>
          }
        />

        {/* Protected + Public Pages - With Navbar/Footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/residential-estimating"
          element={
            <MainLayout>
              <ResidentialEstimatingPage />
            </MainLayout>
          }
        />
        <Route
          path="/contactus"
          element={
            <MainLayout>
              <ContactUsPage />
            </MainLayout>
          }
        />
        {/* Example Protected Page */}
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
// <<<<<<< estimators-UI
//       <Footer />
// =======
// >>>>>>> bilaldev
    </Router>
    </>
  );
}

export default App;
