// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ReactJS Projects</div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Task
        </NavLink>
        <NavLink
          to="/birthday-reminder"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Birthday Reminder
        </NavLink>
      </div>
    </nav>
  );
}
