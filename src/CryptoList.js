import React from 'react'
import Card from './Card'
import { useState } from 'react';


const CryptoList = ({ cryptos }) => {

  const [sortOrder, setSortOrder] = useState("priceChangeDesc");
  const [filterText, setFilterText] = useState("");

  const filteredCryptos = cryptos.filter((crypto) => {
    const symbol = crypto.symbol.toLowerCase();
    const name = crypto.name.toLowerCase();
    const filter = filterText.toLowerCase();
    return symbol.includes(filter) || name.includes(filter);
  });

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  
  if (sortOrder === "priceChangeDesc") {
    filteredCryptos.sort((a, b) => {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    });
  } else if (sortOrder === "priceChangeAsc") {
    filteredCryptos.sort((a, b) => {
      return a.price_change_percentage_24h - b.price_change_percentage_24h;
    });
  }

  return (
    <div>
      <div className='options'>
      <select className='Order' value={sortOrder} onChange={handleSortChange}>
      <option >Todas</option>
        <option value="priceChangeDesc">Subieron</option>
        <option value="priceChangeAsc">Bajaron</option>
      </select>
      <input
        className='input'
        type="text"
        placeholder="Btc, Eth, Bnb, Ada ..."
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
      />
      </div>
      {filteredCryptos.map((crypto) => {
        return (
          <div>
            <Card crypto={crypto} key={crypto.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CryptoList