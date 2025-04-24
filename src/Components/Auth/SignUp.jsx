import React, { useState, useCallback } from "react";
import { registerUser } from "../../Services/Api/authApi";
import "../styles/Auth/Signup.css";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      console.log(`Updated ${name}:`, value);
      return updated;
    });
  }, []);
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Form submission started");
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return setError("Passwords do not match");
    }
    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const result = await registerUser(fullName, email.trim(), password);
      console.log("Register API Response:", result);
      if (result.token) {
        localStorage.setItem("token", result.token);
        console.log("Token saved to localStorage");
        window.location.href = "/";
      } else {
        throw new Error("Token not received from API");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.message || "Signup failed. Please try again.");
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-form-section">
        <h2>Create New Account</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          {error && <div className="error">{error}</div>}
          <div className="input-group">
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="at least 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="at least 8 characters"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="8"
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
          <div className="other-section">or</div>
          <button type="button" className="google-btn">
            <img src="/public/images/Google.png" alt="Google" />
            Sign up with Google
          </button>
          <button type="button" className="apple-btn">
            <img src="/public/images/Vector.png" alt="Facebook" />
            Sign up with Facebook
          </button>
        </form>
      </div>
      <div className="signup-image-section">
        <img
          src="/public/images/Signup image.png"
          alt="Design plan with color swatches"
        />
      </div>
    </div>
  );
};
export default SignUp;
