import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?").then((response) => {
      setListOfCoins(response.data.coins);
    });
  }, []);

  const filterCoin = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="crypto-hero">
        <input
          type="text"
          placeholder="bitcoin..."
          className="search-txt"
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        ></input>
      </div>
      <div className="crypto-display">
        {filterCoin.map((coin) => {
          return (
            <Coin
              name={coin.name}
              symbol={coin.symbol}
              price={coin.price}
              icon={coin.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
