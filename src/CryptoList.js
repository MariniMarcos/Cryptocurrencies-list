import React from 'react'
import Card from './Card'
import { useState } from 'react';


const CryptoList = ({ cryptos }) => {
    
    const [filterText, setFilterText] = useState("");
  
    const filteredCryptos = cryptos.filter((crypto) => {
      const symbol = crypto.symbol.toLowerCase();
      const name = crypto.name.toLowerCase();
      const filter = filterText.toLowerCase();
      return symbol.includes(filter) || name.includes(filter);
    });
  
    return (
      <div>
        <input
          className='input'
          type="text"
          placeholder="Btc, Eth, Bnb, Ada ..."
          value={filterText}
          onChange={(event) => setFilterText(event.target.value)}
        />
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