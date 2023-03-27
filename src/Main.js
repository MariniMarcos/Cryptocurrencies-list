import React from 'react'
import CryptoListContainer from './CryptoListContainer';
import { useAuth } from './context/authContext';
import Navbar from './Navbar';


const Main = () => {

    const { logout} = useAuth()

    const handleLogout = async () => {
        await logout()

    }
    return (
        <div>
            <Navbar/>
            <CryptoListContainer />
        </div>
    );
}

export default Main