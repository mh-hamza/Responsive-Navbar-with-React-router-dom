import React, { useState } from "react";
import style from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  const isNavActive = ()=>{
    
  }
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div>
          <h1>Logo</h1>
        </div>
        <ul className={`${style.ul} ${isMenuOpen ? style.navActive : ""}`}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
        {
          isMenuOpen? <IoIosCloseCircleOutline className={style.baricon}onClick={toggleMenu} /> : <FaBars  className={style.baricon} onClick={toggleMenu} />
        }
      </nav>
    </header>
  );
}

export default Header;
