import React from 'react'
import { useState } from 'react';
import { useAuth } from './context/authContext'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
      setMenuOpen(!menuOpen);
    }
    
    const { logout } = useAuth()

    const handleLogout = async () => {
        await logout()

    } 

    const handleGoMercadoCrypto = () => {
        window.location.href = '/#inicio'
    }
    const handleGoMiPerfil = () => {
        window.location.href = '/miperfil'
    }
    const handleGoNosotros = () => {
        window.location.href = '/nosotros'
    }
    const handleGoSeguridad = () => {
        window.location.href = '/seguridad'
    }
    const handleGoConfiguracion = () => {
        window.location.href = '/configuracion'
    }

    return (
      <div className="menu-container">
        <button className="menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpen && (
          <ul className="menu-options">
            <li><a onClick={handleGoMercadoCrypto}>Mercado Crypto</a></li>
            <li><a onClick={handleGoMiPerfil}>Ver mi perfil</a></li>
            <li><a onClick={handleGoSeguridad}>Seguridad</a></li>
            <li><a onClick={handleGoNosotros}>Conocé al Team</a></li>
            <li><a onClick={handleGoConfiguracion}>Configuracion</a></li>
            <li><a id='cerrarsesion' onClick={handleLogout}>Cerrar Sesion</a></li>
          </ul>
        )}
      </div>
    );
  }

export default Menu