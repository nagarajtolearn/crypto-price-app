import React from "react";
import "../App.css";

function Coin({ name, price, icon, symbol }) {
  return (
    <div className="coin">
      <h1 className="name">Name: {name}</h1>
      <img src={icon} alt="icon" className="icon" />
      <h3 className="price">Price: {price}</h3>
      <h3 className="price">Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
