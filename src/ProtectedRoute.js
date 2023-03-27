import React from 'react'
import { useAuth } from './context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  
  const {user, loading} = useAuth()
  
  if (!user){
    return <Navigate to="/login"  />
  }

  return (
    
    loading ? <div class="loader">
    <div class="justify-content-center jimu-primary-loading"></div>
    </div> :
    <>
      {children}
    </>
  )
}

export default ProtectedRoute