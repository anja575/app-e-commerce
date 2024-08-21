import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className='navBar'>
         <div className="logo-container">
          {/*<img src={logoImage} alt="Logo" className="logo" />*/}
          <h4 className='logo-text'>TechTronics</h4>
        </div>
        <div className="NavLinks">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        </div>
    </div >
  )
}

export default NavBar