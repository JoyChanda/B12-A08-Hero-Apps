import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const links = (
    <>
      <li
        className="m-2 cursor-pointer hover:text-purple-600 transition"
        onClick={() => navigate("/")}
      >
        Home
      </li>

      <li
        className="m-2 cursor-pointer hover:text-purple-600 transition"
        onClick={() => navigate("/apps")}
      >
        Apps
      </li>

      <li
        className="m-2 cursor-pointer hover:text-purple-600 transition"
        onClick={() => navigate("/installation")}
      >
        Installation
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a
          className="btn btn-ghost text-blue-400"
          onClick={() => navigate("/")}
        >
          <img src="images/logo.png" alt="" className="w-12 h-12" />
          HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn text-white border-none 
                     bg-gradient-to-r 
                     from-[#632EE3] 
                     to-[#9F62F2] 
                     hover:from-[#9F62F2] 
                     hover:to-[#632EE3] 
                     transition-all duration-300"
          href="https://github.com/JoyChanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/github.png"
            alt="GitHub Logo"
            className="w-6 h-6 filter invert brightness-0"
          />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
