import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <a href="/dashboard" className="navbar-brand">
          <img alt="logo" src="../../.././Group45253.png"  />
        </a>

        <div className="navbar-links">
          <>
            <a href="/dashboard" className="navbar-button ">
              Dashboard ✨
            </a>
          </>

          <>
            <div className="navbar-divider" />
            <a href="/login" className="navbar-button create-case">
              Logout
            </a>
          </>
        </div>
      </div>
    </nav>
  );
}
