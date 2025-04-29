// React and necessary hooks
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// API functions to verify and resend OTP
import { verifyOtp, sendOtpToEmail } from "../../Services/Api/authApi";

// CSS specific to OTP verification
import "../styles/Auth/OtpVerification.css";

const OtpVerification = () => {
  // State to hold OTP input
  const [otp, setOtp] = useState("");
  // Message for success/error feedback
  const [message, setMessage] = useState("");
  // Loading state during verification
  const [loading, setLoading] = useState(false);
  // Loading state during resend
  const [resendLoading, setResendLoading] = useState(false);
  // Countdown timer for resend button
  const [counter, setCounter] = useState(60);

  // Ref for OTP input field
  const otpRef = useRef();
  // Navigation hook
  const navigate = useNavigate();
  // Location hook to get email from URL
  const location = useLocation();

  // Extracting email from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  // Autofocus on OTP input field when component mounts
  useEffect(() => {
    if (otpRef.current) otpRef.current.focus();
  }, []);

  // Timer effect to countdown resend OTP button
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Handle OTP verification form submit
  const handleVerify = async (e) => {
    e.preventDefault();

    // Validate OTP format
    if (!otp || otp.length !== 6) {
      return setMessage("Please enter a valid 6-digit OTP.");
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await verifyOtp(email, otp); // API call
      setMessage(response.message || "OTP Verified!");
      // Redirect to reset password page
      setTimeout(() => {
        navigate(`/reset-password?email=${email}`);
      }, 1200);
    } catch (err) {
      // Show error message
      setMessage(err?.response?.data?.message || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Handle resend OTP functionality
  const handleResendOtp = async () => {
    setResendLoading(true);
    setMessage("");
    try {
      await sendOtpToEmail(email); // API call
      setMessage("OTP resent successfully!");
      setCounter(60); // Reset timer
    } catch (err) {
      setMessage(err?.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setResendLoading(false);
    }
  };

  // Cancel and return to login
  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div className="otp-container">
      <div className="form-section">
        <h2>Verify OTP</h2>
        <p>A 6-digit code was sent to: <strong>{email}</strong></p>

        {/* OTP Verification Form */}
        <form onSubmit={handleVerify}>
          <div className="input-group">
            <label>OTP</label>
            <input
              type="text"
              maxLength={6}
              placeholder="Enter OTP"
              ref={otpRef}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="button-group">
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          {/* Feedback Message */}
          {message && <p className="feedback-message">{message}</p>}
        </form>

        {/* Resend OTP Section */}
        <div className="resend-section">
          {counter > 0 ? (
            <p>Resend OTP in <strong>{counter}s</strong></p>
          ) : (
            <button
              className="resend-btn"
              onClick={handleResendOtp}
              disabled={resendLoading}
            >
              {resendLoading ? "Resending..." : "Resend OTP"}
            </button>
          )}
        </div>
      </div>

      {/* Image section on the right */}
      <div className="otp-image-section">
        <img src="/images/Signup image.png" alt="Verification" />
      </div>
    </div>
  );
};

export default OtpVerification;
