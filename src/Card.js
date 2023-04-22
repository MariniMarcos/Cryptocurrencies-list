import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




const Card = ({ crypto }) => {

    const [USD, setUSD] = useState(0);
    const arg = crypto["current_price"] * USD;
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.bluelytics.com.ar/v2/latest')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la respuesta de la API.');
                }
                return response.json();
            })
            .then(data => {
                const USD = data.blue.value_sell;
                setUSD(USD);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);


    return (
        <Link to={`/crypto/${crypto["symbol"].toUpperCase()}`}>
            <div class="card">
                <div class="title">
                    <img width="40" height="40" src={crypto["image"]} alt={crypto["name"]} />
                    <div class="title-text" >
                        <p>
                            {crypto["symbol"].toUpperCase()}
                        </p>
                        <p>
                            {crypto["name"]}
                        </p>
                    </div>
                    <div className='Percent'>
                        <p class={`percent ${crypto['price_change_percentage_24h'] < 0 ? 'negative' : ''}`} style={{ overflow: 'visible' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20" class={`${crypto['price_change_percentage_24h'] < 0 ? 'rotate-180' : ''}`}>
                                <path d={`M1408 576q0-26-19-45l-448-448q-19-19-45-19t-45 19l-448 448q-19 19-19 45 0 26 19 45t45 19h896q26 0 45-19t19-45z`} fill={crypto['price_change_percentage_24h'] < 0 ? 'red' : 'green'}></path>
                            </svg> {crypto['price_change_percentage_24h'].toFixed(2)} %
                        </p>
                    </div>
                </div>
                <div class="data">
                    <p>
                        {crypto["current_price"].toFixed(2)} USD
                        <br />
                        {arg.toFixed(2)} ARG
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card