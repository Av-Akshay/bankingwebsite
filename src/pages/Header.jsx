import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.jpg";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef } from "react";

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
      <div className="menu-bar" ref={menuBarRef}>
        <button
          className="menu-btn"
          onClick={() => {
            setToggle(!toggle);
            console.log("clicked");
          }}
        >
          <HiMenu />
        </button>
      </div>
      <div className={toggle ? "menu-list active" : "menu-list"}>
        <div className="close-btn-div">
          <button className="close-btn">
            <AiOutlineClose />
          </button>
        </div>

        <ul>
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
  );
};
export default Header;
