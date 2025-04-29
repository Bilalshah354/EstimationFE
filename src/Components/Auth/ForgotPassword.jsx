// <<<<<<< estimators-UI
// import React, { useState } from "react";
// =======
import React, { useEffect, useState } from "react";
// >>>>>>> bilaldev
import "../styles/Auth/ForgotPassword.css";
import { sendOtpToEmail } from "../../Services/Api/authApi";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 👇 Log every change
  useEffect(() => {
    console.log("Email state changed:", email);
    console.log("Message state:", message);
    console.log("Loading state:", loading);
  }, [email, message, loading]);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendOtpToEmail(email);
      setMessage(response.message);
      console.log("OTP Sent Successfully:", response.message);
      navigate(`/otp-verification?email=${email}`);
    } catch (err) {
      const errMsg = err.response?.data?.message || "Something went wrong";
      setMessage(errMsg);
      console.log("Error sending OTP:", errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="forgot-container">
        <div className="form-section">
          <h2>Reset Password</h2>
          <p>Enter your email address and we’ll send you a link to reset your password.</p>
          <form className="forgot-form" onSubmit={handleReset}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Example@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Sending..." : "Reset Password"}
            </button>
// <<<<<<< estimators-UI
        
// // =======
//             <button
//               type="button"
//               className="cancel-btn"
//               onClick={() => navigate(-1)} // 👈 Cancel goes back
//               style={{ marginTop: "10px", backgroundColor: "#ccc", color: "#333" }}
//             >
//               Cancel
//             </button>
// >>>>>>> bilaldev
          </form>
        </div>
        <div className="forgot-image-section">
          <img
            src="/images/Signup image.png"
            alt="Design plan with color swatches"
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
