import React from 'react'
import { useAuth } from './context/authContext'
import Menu from './Menu'

const Navbar = () => {
  
    const { user} = useAuth()

  
    const userImage = user.photoURL

    return (
    <div className='navbar' >
        <div className='userInformation'>
        <img className='userImage' src={userImage} />
        <h3> {user.displayName} </h3>
        </div>
        <Menu/>
    </div>
  )
}

export default Navbar