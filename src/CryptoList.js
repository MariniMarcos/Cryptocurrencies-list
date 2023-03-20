import React from 'react'
import Card from './Card'


const CryptoList = ({cryptos}) => {
    return (
        <div>
            {cryptos.map((crypto) => {
                return (
                    <div>
                        <Card crypto={crypto} key={crypto.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default CryptoList