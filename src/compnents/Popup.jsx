import { AiOutlineClose } from "react-icons/ai";
import React from "react";

const Popup = (props) => {
  const { name, email, id, current_balance } = props.item;
  return (
    <>
      <div className="popup">
        <div className="card">
          <button
            onClick={() => {
              props.removeCard();
            }}
          >
            <AiOutlineClose className="close-popup" />
          </button>
          <div className="pera">
            <label>Name:-</label>
            {name}
          </div>
          <div className="pera">
            <label>Email:-</label>
            {email}{" "}
          </div>
          <div className="pera">
            <label>Id:-</label> {id}
          </div>
          <div className="pera">
            <label>Current Balance:-</label>
            {current_balance}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
