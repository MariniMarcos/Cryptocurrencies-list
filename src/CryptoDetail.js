import React from 'react'
import TradingViewWidget from "./TradingViewWidget"
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const CryptoDetail = ({crypto}) => {
  
   const { id } = useParams();

    const handleBackList = () => {
        window.history.back();
    }
  
  return (
    <div className='CryptoDetail'>
      <Navbar/>
      <button className='handleBackList' onClick={handleBackList}>Volver al listado</button>
      <TradingViewWidget symbol={id} />
    </div>
  )
}

export default CryptoDetail