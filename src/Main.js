import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CryptoListContainer from './CryptoListContainer';

const Main = () => {
    
    return (
        <main>
            <Routes>
                <Route path="/" element={<CryptoListContainer/>} />
            </Routes>
        </main>
    );
}

export default Main