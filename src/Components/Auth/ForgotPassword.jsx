import React, { useState } from "react";
import "../styles/Auth/ForgotPassword.css";
import { sendOtpToEmail }  from "../../Services/Api/authApi"; 
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendOtpToEmail(email);
      setMessage(response.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
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