import React from "react";
import "./Nav.css";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="Nav-container">
        <header className="header">
          <div className="logo">
            <div className="logo-text">Logo </div>
            <div className="Search">
              <div className="search-icon">
                <IoIosSearch />
              </div>
              <input type="text" placeholder="Search here...." />
              <span>
                <button>Search</button>
              </span>
            </div>
          </div>

          <nav className="NavBar">
            <ul>
              <Link to={"login"}>
                <li className="click">Login</li>
              </Link>
              <Link to={"signup"}>
                <li className="click">SignUp</li>
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
