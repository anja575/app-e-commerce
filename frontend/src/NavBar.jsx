import React from "react";
import { NavLink } from "react-router-dom";
import apiService from "./apiService";


function NavBar({ token, updateToken }) {
  const isAdmin = apiService.getLoginInfo().isAdmin === "true";

  const handleLogout = () => {
    apiService.logout();
    updateToken(null);
  };

  return (
    <div className="navBar">
      <div className="logo-container">
        <img src="TechTronics-logo.png" alt="Logo" className="logo" />
        <h4 className="logo-text">TechTronics</h4>
      </div>
      <div className="NavLinks">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {isAdmin && <NavLink to="/admin">Admin</NavLink>}
        {token && (
          <NavLink to="/logout" onClick={handleLogout}>
            Logout
          </NavLink>
        )}
        {!token && <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  );
}

export default NavBar;
