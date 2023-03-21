import React from 'react'

const Card = ({ crypto }) => {
    return (
        <div class="card">
            <div class="title">
                <img width="40" height="40" src={crypto["image"]} alt={crypto["name"]} />
                <div class="title-text" >
                <p>
                    {crypto["symbol"]}
                </p>
                <p>
                    {crypto["name"]}
                </p>
                </div>
                <p class={`percent ${crypto['price_change_percentage_24h'] < 0 ? 'negative' : ''}`} style={{ overflow: 'visible' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20" class={`${crypto['price_change_percentage_24h'] < 0 ? 'rotate-180' : ''}`}>
                        <path d={`M1408 576q0-26-19-45l-448-448q-19-19-45-19t-45 19l-448 448q-19 19-19 45 0 26 19 45t45 19h896q26 0 45-19t19-45z`} fill={crypto['price_change_percentage_24h'] < 0 ? 'red' : 'green'}></path>
                    </svg> {crypto['price_change_percentage_24h']} %
                </p>
            </div>
            <div class="data">
                <p>
                    {crypto["current_price"]} USD
                <br />    
                    {crypto["current_price"]*380} ARG
                </p>
            </div>
        </div>
    )
}

export default Card