import React from "react";
import BankCustomer from "../assests/bank customer 1.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="center-div">
      <div className="left-section">
        <button className="btn">
          <NavLink to="customer"> Our Cistomers</NavLink>
        </button>
        <button className="btn">
          <NavLink to="transaction"> Transection History</NavLink>
        </button>
        <button className="btn">
          <NavLink to="transfer">Transfer Money</NavLink>
        </button>
      </div>
      <div className="right-section">
        <img src={BankCustomer} className="customer" alt="customer-logo" />
      </div>
    </div>
  );
};
export default Home;
