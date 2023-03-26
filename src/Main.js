import React from 'react'
import CryptoListContainer from './CryptoListContainer';
import { useAuth } from './context/authContext';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    
    const {user, logout, loading} = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
       await logout()
         navigate('/login') 
    }

    if(loading){
        return <h1>Cargando...</h1>
    }
    
    return (
        <main>
            <h1>Lista de Criptomonedas</h1>
            <button onClick={handleLogout}>Cerrar Sesión</button>
              <CryptoListContainer/>
        </main>
    );
}

export default Main