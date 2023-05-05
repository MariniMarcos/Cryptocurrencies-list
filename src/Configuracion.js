import React from 'react'
import { useState } from 'react';

const Configuracion = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>{darkMode ? 'Modo oscuro' : 'Modo claro'}</h1>
      <button onClick={toggleDarkMode} text={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}> </button>
    </div>
  )
}

export default Configuracion