import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = props => {

  return (
    // <div className="Navbar" bg="light">
      <Nav className="justify-content-center Navbar">
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
      <NavLink 
      to="/reminders/new" 
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>
      New Reminder
      </NavLink>
      </Nav>
    // </div>
  );
};

export default NavBar;