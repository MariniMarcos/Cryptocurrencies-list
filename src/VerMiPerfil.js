import React from 'react'
import { useAuth } from './context/authContext'

const MiPerfil = () => {
  
    const { user } = useAuth()

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es-ES', options)
    }
  
  return (
    <div className='Miperfil' >
      {user &&  <img src={user.photoURL} alt="imagen de perfil"/>}
      {user &&  <h1>{user.displayName}</h1>}
      {user &&  <h3>Correo:{user.email} {user.emailVerified && <span>&#10004;</span>}</h3>}
      {user &&  <h3>Usuario Creado:   {formatDate(user.metadata.creationTime)}</h3>}
    </div>
  )
}

export default MiPerfil