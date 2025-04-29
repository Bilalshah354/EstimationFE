import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../Services/Api/authApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Auth/OtpVerification.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  const getPasswordStrength = () => {
    if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)) {
      return "Strong";
    } else if (newPassword.length >= 6) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      return toast.error("All fields are required.");
    }

    if (newPassword.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    setLoading(true);
    try {
      const response = await resetPassword(email, newPassword);
      toast.success(response.message || "Password reset successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <div className="form-section">
        <h2>Reset Password</h2>
        <p>Reset password for <strong>{email}</strong></p>
        <form onSubmit={handleReset}>
          <div className="input-group">
            <label>New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {newPassword && (
              <p className={`strength ${getPasswordStrength().toLowerCase()}`}>
                Strength: {getPasswordStrength()}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>Confirm New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>

      <div className="otp-image-section">
        <img src="/images/Signup image.png" alt="Reset Password" />
      </div>
    </div>
  );
};

export default ResetPassword;
