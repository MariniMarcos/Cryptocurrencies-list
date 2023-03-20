import React from 'react'
import CryptoList from './CryptoList'
import { useEffect, useState } from 'react';


const CryptoListContainer = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
         fetch(url)
            .then((response) => response.json())
            .then((data) => setPrices(data))
            .catch((error) => console.log(error));
    }, []);



    return (
        <div className='CryptoListContainer'>
            <h1>Busca tu crypto</h1>
            <CryptoList cryptos={prices} />
        </div>
    )
}

export default CryptoListContainer