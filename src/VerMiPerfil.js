import React from 'react'
import { useAuth } from './context/authContext'

const MiPerfil = () => {
  
    const { user} = useAuth()
  
  return (
    <div className='Miperfil' >
      <img src={user.photoURL} alt="imagen de perfil" />
      <h1>{user.displayName}</h1>
      <h3>Correo: {user.email}</h3>
      <h3>Telefono: {user.phoneNumber}</h3>
      <h3>Direccion: {user.address}</h3>
      <h3>Ciudad: {user.city}</h3>
      <h3>Provincia: {user.province}</h3>
      <h3>Pais: {user.country}</h3>
      <h3>Codigo Postal: {user.postalCode}</h3>
    </div>
  )
}

export default MiPerfil