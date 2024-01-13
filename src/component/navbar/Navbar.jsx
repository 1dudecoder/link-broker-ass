// BlurredNavbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import the associated CSS file
import { Button } from "../common";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  let data = localStorage.getItem("sb-pvubhaxuzesicexmqslx-auth-token");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignout = () => {
    localStorage.clear("sb-pvubhaxuzesicexmqslx-auth-token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <nav className={`blurred-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Your navigation content goes here */}
      <div className="navbar-items">
        <div className="item-left">
          <p>Homepage</p>
        </div>
        <div className="items-right">
          <div>
            <Link to={"/login"}>
              {" "}
              {data ? (
                <p style={{ color: "white" }}></p>
              ) : (
                <p style={{ color: "white" }}>Login</p>
              )}
            </Link>
          </div>
          <div>
            {data ? (
              <Button text={"Signout"} handleSignout={handleSignout} />
            ) : (
              <Link to={"/signup"}>
                {" "}
                <Button text={"Create Account"} />{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
