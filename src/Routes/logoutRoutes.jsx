import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registro from '../Components/Registro';
import Login from '../Components/Login';
import NavBarB from '../Components/NavBarB';

const LogoutRoutes = () => {
  return (
    <>
    <NavBarB />
    <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Navigate to='/login/login' />} />
    </Routes>
    </>
  )
}

export default LogoutRoutes