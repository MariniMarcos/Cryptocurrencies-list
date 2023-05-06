import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Menu from './Menu';

const Configuracion = () => {

  const [modo, setModo] = useState(false);
  const refConfiguracion = useRef(null);

  const cambiarModo = () => {
    setModo(!modo);
  }

  useEffect(() => {
    // Obtiene el modo almacenado en localStorage al cargar el componente
    const modoGuardado = localStorage.getItem('modo');
    if (modoGuardado === 'true') {
      refConfiguracion.current.classList.replace('configuracion', 'lightMode');
      setModo(true);
    }
  }, []);

  const handleLihgtMode = () => {
    cambiarModo();
    if (!modo) {
      refConfiguracion.current.classList.replace('Configuracion', 'lightMode');
      localStorage.setItem('modo', 'true');
    } else {
      refConfiguracion.current.classList.replace('lightMode', 'Configuracion');
      localStorage.removeItem('modo', 'false');
    }
  }


  return (
    <div className='Configuracion' ref={refConfiguracion} >
    <h1>Modo claro</h1>
    <div class="toggle-switch">
    <label class="switch-label">
      <input onChange={handleLihgtMode} type="checkbox" class="checkbox"/> 
      <span class="slider"></span>
    </label>
  </div>
  </div>
  )
}

export default Configuracion