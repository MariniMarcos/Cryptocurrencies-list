import React from 'react'

const Nosotros = () => {
  return (
    <div className='Nosotros'>
      <h1>Nuestro TeamWork</h1>
      <div className='cardProfile'>
        <div className='cardProfile-image'>
          <img src='/Founder.jpg' alt='Marcos Marini Founder' />
        </div>
        <div className='cardProfile-text'>
          <h2>Marcos Marini</h2>
          <h3>Founder</h3>
          <ul>
            <li>
            <p>Licenciado en Administracion de empresas.</p>
            </li>
            <li>
            <p>Programador frontend.</p>
            </li>
            <li>
            <p>Amante de las tecnologias y las crypto.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nosotros