import Header from "./pages/Header";
import React from "react";
import Home from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Transection from "./pages/Transection";
import Transfer from "./pages/TransferMoney";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customer" element={<Customers />} />
        <Route path="/transection" element={<Transection />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </>
  );
}

export default App;
