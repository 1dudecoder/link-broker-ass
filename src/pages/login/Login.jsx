// Login.js
import React, { useEffect, useState } from "react";
import "./Login.css";
import supabase from "../../utils/supabase.js";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error logging in:", error.message);
      } else {
        console.log("User logged in:", user);
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        return navigate("/gallery");
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>LOGIN</h2>
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
