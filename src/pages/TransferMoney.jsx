import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tranferTheMoney } from "../redux/action";

const Transfer = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.dumyData);

  const [money, setMoney] = useState({
    amount: "",
    tranferTo: "",
    transferCustomer: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(tranferTheMoney(money));
    setMoney({
      amount: "",
      tranferTo: "",
      transferCustomer: "",
    });
  };

  const inputChange = (event) => {
    const { name, value } = event.target;
    setMoney({
      ...money,
      [name]: value,
    });
  };

  return (
    <div className="section">
      <div>
        <h1 className="heading">Transfer The Money</h1>
      </div>
      <div>
        <form onSubmit={formSubmit}>
          <div className="input-filds">
            <label className="pera">Person who transfer the money:-</label>
            <select
              className="forms-input"
              name="transferCustomer"
              onChange={inputChange}
              value={money.transferCustomer}
            >
              <option>Select the person...</option>
              {data?.clint?.map((item) => {
                return <option key={item.id}>{item.name}</option>;
              })}
            </select>
          </div>

          <div className="input-filds">
            <label className="pera">
              Select the person to whome money will be transfer:-
            </label>
            <select
              className="forms-input"
              name="tranferTo"
              onChange={inputChange}
              value={money.tranferTo}
            >
              <option>Select the person...</option>
              {data?.clint?.map((item) => {
                if (item.name === money.transferCustomer) {
                  return null;
                } else {
                  return <option key={item.id}>{item.name}</option>;
                }
              })}
            </select>
          </div>

          <div className="input-filds">
            <label className="pera">Filled the amount:-</label>
            <input
              type="number"
              name="amount"
              value={money.amount}
              onChange={inputChange}
              className="forms-input"
            />
          </div>
          <button className="btn" type="sumit">
            Transfer Money
          </button>
        </form>
      </div>
    </div>
  );
};
export default Transfer;
