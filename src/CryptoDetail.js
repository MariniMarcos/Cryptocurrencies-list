import React from 'react'
import TradingViewWidget from "./TradingViewWidget"
import { useParams } from 'react-router-dom';

const CryptoDetail = ({crypto}) => {
  
   const { id } = useParams();
  
  return (
    <div className='CryptoDetail'>
      <h1></h1>
      <TradingViewWidget symbol={id} />
    </div>
  )
}

export default CryptoDetail