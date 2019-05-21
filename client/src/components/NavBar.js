import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { useAlert } from 'react-alert'



const link = {
  width: '110px',
  padding: '5px',
  margin: '2px 2px 0px',
  // background: 'white',
  background: '#f5f5f5',
  textDecoration: 'none',
  color: 'blue',
  fontWeight: 'bold',
  borderRadius: '8px 8px 0px 0px',
}

const NavBar = props => {
  const alert = useAlert()

  return (
      <Nav variant="tabs" className="NavBar" >
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            borderLeft: '2px solid #dee2e6',
            borderRight: '2px solid #dee2e6',
            borderTop: '2px solid #dee2e6',
            borderBottom: '0px',

          }}>
          Home
        </NavLink>

        <NavLink 
          to="/pets/new" 
          exact 
          style={link}
          activeStyle={{
            borderLeft: '2px solid #dee2e6',
            borderRight: '2px solid #dee2e6',
            borderTop: '2px solid #dee2e6',
            borderBottom: '0px',
          }}>
        Add a new pet
        </NavLink>
      
        <NavLink 
          to="/reminders/new" 
          exact 
          style={link}
          activeStyle={{
            borderLeft: '2px solid #dee2e6',
            borderRight: '2px solid #dee2e6',
            borderTop: '2px solid #dee2e6',
            borderBottom: '0px',
          }}>
          New Reminder
        </NavLink>

        <NavLink 
        to="#" 
        onClick={() => {alert.show("Calendar view is coming Soon")}}
        style={link}
        >
        Calendar
        </NavLink>
      </Nav>
  );
};

export default NavBar;




// className="justify-content-center Navbar"