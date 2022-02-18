import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoutes from './publicRoutes';
import LogoutRoutes from './logoutRoutes';
import PrivateRoutes from './PrivateRoutes';
import LoginRoutes from './LoginRoutes';

const AppRouter = () => {
  return (
  <BrowserRouter>
    
    <Routes>
      <Route path='/login/*' element={
        <PublicRoutes>
          <LogoutRoutes />
        </PublicRoutes>
      }  />

      <Route path='/*' element={
        <PrivateRoutes>
          <LoginRoutes />
        </PrivateRoutes>
      } />
      

    </Routes>
  </BrowserRouter>
  );
};

export default AppRouter;

