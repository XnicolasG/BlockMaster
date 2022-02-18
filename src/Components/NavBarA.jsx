import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/NavBarA.css'
import {useDispatch} from 'react-redux'
import {LogoutAction} from '../actions/UsuariosActions'
import { getQuery } from '../helpers/getDataCar';
import {RiUserLocationLine} from 'react-icons/ri'


const NavBarA = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // ========= Ubicación usuario==========
  let url = '';

  const [address, setAddress] = useState('');

  useEffect(() => {
    getCoordenadas();
  });

  const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
        latitude + ',' +
        longitude +  '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
        getLocation(url);
    });
  };

  const getLocation = async (url) => {
    const resp = await fetch(url);
    const { results } = await resp.json();
    console.log(results)
    setAddress(results[7].address_components[0].long_name + ',' + results[10].address_components[0].long_name);
  };

  
  


// =========LogOut======================
  const handleLogout = ()=>{
    dispatch(LogoutAction())
    navigate('/login/login')
    window.reload()
  }
  return (
      <nav className='NavA'>
          
          <img className='Logo' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1644085245/Personal/logo-blockBuster_drn9su.png" 
            alt="Logo" title='BlockMaster' />
            <div className='ContLink'>
              <div className='locat'><RiUserLocationLine className='ubic'/><p className='ubic' >{address}</p></div>
              <Link className='Links' to='/home'>Todas</Link>
              <Link className='Links' to="/mas">Más Valoradas</Link>
              <Link className='Links' to="/menos">Menos Valoradas</Link>
              <Link className='Links' to="/lista">🎦 Mi lista</Link>
              
              <Link to='/login/login' onClick={handleLogout} className='out'>Logout</Link>
          </div>
      </nav>
  );
};

export default NavBarA;
