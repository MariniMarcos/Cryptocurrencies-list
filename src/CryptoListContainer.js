import React, { useEffect, useState } from 'react';
import CryptoList from './CryptoList';

const CryptoListContainer = () => {
  const [prices, setPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    const fetchPrices = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPrices(data))
        .catch((error) => console.log(error));
    };

    // Fetch prices initially
    fetchPrices();

    // Fetch prices every 5 minutes
    const intervalId = setInterval(() => {
      fetchPrices();
    }, 300000); // 5 minutes in milliseconds

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  const filteredCryptos = prices.filter((crypto) => {
    return crypto['symbol'].includes(searchTerm);
  });

  return (
    <div className='CryptoListContainer'>
      <h1>Mercado Crypto</h1>
      <CryptoList cryptos={filteredCryptos} />
    </div>
  );
};

export default CryptoListContainer;