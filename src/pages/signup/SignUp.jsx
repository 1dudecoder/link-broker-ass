// SignUp.js
import React, { useState } from "react";
import "./SignUp.css";
import supabase from "../../utils/supabase.js"; // Import the supabase client
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [status, setStatus] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        console.log("User signed up:", user);
        setStatus("please check your email to verify your accoount");
        // Optionally, you can redirect the user to a different page upon successful signup
        // history.push("/dashboard"); // Assuming you have 'react-router-dom' set up
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Sign Up</h2>
      </div>
      <div className="login-form">
        <form onSubmit={handleSignup}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Mobile number or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <p className="signup-link">{status}</p>

          <a href="#" className="signup-link">
            Forgotten password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
