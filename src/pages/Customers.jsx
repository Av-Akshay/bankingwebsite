import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Popup from "../compnents/Popup";

const Customers = () => {
  const [customerId, setCustomerid] = useState("");

  const store = useSelector((store) => store.dumyData);
  const removeCard = () => {
    setCustomerid("");
  };

  return (
    <div className="section">
      {store?.clint?.map((item) => {
        if (item.id === customerId) {
          return <Popup key={item.id} removeCard={removeCard} item={item} />;
        } else {
          return null;
        }
      })}
      <div className="heading">
        <h1>Our Customer</h1>
      </div>
      <div className="table-div">
        <p className="pera">Spark Bank customers list:-</p>
        <table border={1}>
          <thead>
            <tr>
              <th>s.no.</th>
              <th>name</th>
              <th>email</th>
              <th>current balance</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {store?.clint?.map((elem, index) => {
              return (
                <tr
                  key={elem.id}
                  onClick={() => {
                    setCustomerid(elem.id);
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{elem.name}</td>
                  <td>{elem.email}</td>
                  <td>{elem.current_balance}</td>
                  <td>{elem.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Customers;
