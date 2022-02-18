import React  from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({children}) => {
    const {usuarios} = useSelector((us)=>us.datosUsuarios)
    
  return (
    usuarios.logged ? <Navigate to='/' /> : children
  )
}

export default PublicRoutes