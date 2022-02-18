import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {usuarios} = useSelector((us)=>us.datosUsuarios)
  return (
    !usuarios.logged ? <Navigate to='/login/login' /> :  children
  )
}

export default PrivateRoutes