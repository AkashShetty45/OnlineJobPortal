import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <h1 className="logo">
          Job<span> Portal</span>
          </h1>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/login">Login/Sign up</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
