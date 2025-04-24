// import React from "react";
// import "../styles/Auth/Login.css";

// const Login = () => {
//   return (
//     <>
//       <div className="login-container">
//         <div className="form-section">
//           <h2>Welcome Back 👋</h2>
//           <p>
//             Today is a new day. It's your day. You shape it. Sign in to start
//             managing your projects.
//           </p>
//           <form>
//             <div className="input-group">
//               <label>Email</label>
//               <input type="email" placeholder="Example@email.com" required />
//             </div>

//             <div className="input-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="at least 8 characters"
//                 required
//                 minLength="8"
//               />
//             </div>
//             <div className="forgot-password">
//               <a href="/forgot-password">Forgot Password?</a>
//             </div>

//             <button type="submit" className="signup-btn">
//               Sign up
//             </button>

//             <div className="other-section">or</div>

//             <button className="google-btn">
//               <img src="/public/images/Google.png" />
//               Sign up with Google{" "}
//             </button>
//             <button className="apple-btn">
//               <img src="/public/images/Vector.png" />
//               Sign up with Facebook
//             </button>
//           </form>
//         </div>

//         <div className="login-image-section">
//           <img
//             src="/public/images/Signup image.png"
//             alt="Design plan with color swatches"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/Api/authApi";
import "../styles/Auth/Login.css";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
        const result = await loginUser(formData.email, formData.password);
        
        localStorage.setItem("token", result.token);
       
        navigate("/");
      } catch (err) {
        setError(err.message || "Login failed");
      } finally {
        setLoading(false);
      }
    },
    [formData, navigate]
  );
  return (
    <div className="login-container">
      <div className="login-form-section">
        <h2>Welcome Back 👋</h2>
        <p>
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
        <form onSubmit={handleLogin}>
          {error && <div className="error">{error}</div>}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="at least 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              autoComplete="current-password"
            />
          </div>
          <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
             </div>
          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <button  navigate="/signup" className="signup-btn">
               Sign up
             </button>


          <div className="other-section">or</div>

          <button className="google-btn">
            <img src="/public/images/Google.png" />
            Sign up with Google{" "}
          </button>
          <button className="apple-btn">
            <img src="/public/images/Vector.png" />
            Sign up with Facebook
          </button>
        </form>
      </div>
      <div className="login-image-section">
        <img
          src="/public/images/Signup image.png"
          alt="Creative workspace with color swatches"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Login;
