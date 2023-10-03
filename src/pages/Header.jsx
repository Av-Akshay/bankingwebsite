import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assests/logo.jpg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  let menuBarRef = useRef();
  useEffect(() => {
    const handle = (event) => {
      if (!menuBarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  });

  return (
    <div className="menu">
      <NavLink to="/">
        <div className="logo">
          <img src={logo} className="logo-img" alt="logo" />
          <p className="bank-name">Spark Bank</p>
        </div>
      </NavLink>
      <div ref={menuBarRef}>
        <div className="menu-bar">
          <button
            className="menu-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <HiMenu />
          </button>
        </div>
        <div>
          <ul className={toggle ? "menu-list active" : "menu-list"}>
            <li>
              <button
                className="close-btn"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <AiOutlineClose />
              </button>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="customer"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Our Cistomers List
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/transection"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Transection History
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/transfer"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Transfer Money
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
