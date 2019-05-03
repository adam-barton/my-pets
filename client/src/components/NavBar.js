import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar" bg="light">
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>
      Home
      </NavLink>
      <NavLink 
      to="/new-pet" 
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>
      Add a new pet
      </NavLink>
      {/* <NavLink 
      to="/actors" 
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>
      Actors
      </NavLink>
      <NavLink 
      to="/directors" 
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>
      Directors
      </NavLink> */}
    </div>
  );
};

export default NavBar;