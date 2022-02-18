import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBarA.css'


const NavBarB = () => {
  return (
      <nav className='NavA'>
          
          <img className='Logo' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1644085245/Personal/logo-blockBuster_drn9su.png" 
            alt="Logo" title='BlockMaster' />
            <div className='ContLink'>
              <Link className='Links' to='/login/registro'>Registrarme</Link>
              <Link to='/login/login' className='out'>Log In</Link>
          </div>
      </nav>
  );
};

export default NavBarB;