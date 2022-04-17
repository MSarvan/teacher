import React from "react";
import "../Styles/Navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="h-container">
        <Link to={`/Signup`}>
          <button className="home">Home</button>
        </Link>
      </div>
      <div className="searchbox">
        <form className="form">
          <input type="text" className="s-input" placeholder="Search..." />
          <button className="s-icon">
            <FiSearch />
          </button>
        </form>
      </div>
      <div className="h-options">
        <Link to={`/Signup`}>
          <button className="i">
            <AiOutlineUser />
          </button>
        </Link>
      </div>
    </header>
  );
};
