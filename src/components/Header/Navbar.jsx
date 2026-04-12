import React from "react";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router";
import './Navbar.css'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const link = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/apps'}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={'/installation'}>Installation</NavLink>
          </li>
    </>
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                link
            }
          </ul>
        </div>
        <div className="flex items-center">
            <img className="w-10 h-10 hidden md:flex" src={logo} alt="website logo image" />
            <a className="btn btn-ghost text-xl font-semibold text-purple-400"> Hero.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            link
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn"><FaGithub/>Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
