import React from 'react'
import { useAuth } from './context/authContext'

const Navbar = () => {
  
    const { user, logout } = useAuth()

    const handleLogout = async () => {
        await logout()

    } 
  
    const userImage = user.photoURL

    return (
    <div className='navbar' >
        <div className='userInformation'>
        <img className='userImage' src={userImage} />
        <h3> {user.displayName} </h3>
        </div>
        <button className='logout' onClick={handleLogout}></button>
    </div>
  )
}

export default Navbar