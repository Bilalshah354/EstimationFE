import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, sendOtpToEmail } from "../../Services/Api/authApi";
import "../styles/Auth/OtpVerification.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [counter, setCounter] = useState(60);
  const otpRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  useEffect(() => {
    if (otpRef.current) otpRef.current.focus();
  }, []);

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      return setMessage("Please enter a valid 6-digit OTP.");
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await verifyOtp(email, otp);
      setMessage(response.message || "OTP Verified!");
      setTimeout(() => {
        navigate(`/reset-password?email=${email}`);
      }, 1200);
    } catch (err) {
      setMessage(err?.response?.data?.message || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    setMessage("");
    try {
      const response = await sendOtpToEmail(email);
      setMessage("OTP resent successfully!");
      setCounter(60);
    } catch (err) {
      setMessage(err?.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setResendLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div className="otp-container">
      <div className="form-section">
        <h2>Verify OTP</h2>
        <p>A 6-digit code was sent to: <strong>{email}</strong></p>
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

          <div className="button-group">
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          {message && <p className="feedback-message">{message}</p>}
        </form>

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

      <div className="otp-image-section">
        <img src="/images/Signup image.png" alt="Verification" />
      </div>
    </div>
  );
};

export default OtpVerification;
