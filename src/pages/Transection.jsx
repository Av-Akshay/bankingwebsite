import React from "react";
import { useSelector } from "react-redux";

const Transection = () => {
  const data = useSelector((store) => store.dumyData);
  return (
    <div className="section">
      <div className="heading">
        <h1>Transection History</h1>
      </div>
      <div className="table-div">
        <table border={1}>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Whose tranfer the money</th>
              <th>whose get the money</th>
              <th>Amount</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody>
            {data?.transectionHistory?.map((item, index) => {
              return (
                <tr key={item.history}>
                  <td>{index + 1}</td>
                  <td>{item.transferCustomer}</td>
                  <td>{item.tranferTo}</td>
                  <td>{item.amount}</td>
                  <td>{item.history}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transection;
