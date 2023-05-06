import React from 'react'
import { useAuth } from './context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  
  const {user, loading} = useAuth()
  
  if(loading){
    return <div class="loader">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>
  }
  if (!user){
    return <Navigate to="/Login"  />
  }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute