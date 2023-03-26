import React from 'react'
import CryptoListContainer from './CryptoListContainer';
import { useAuth } from './context/authContext';


const Main = () => {
    
    const {user, logout, loading} = useAuth()


    const handleLogout = async () => {
       await logout()
         
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