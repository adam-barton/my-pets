import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAlert } from 'react-alert'
import Notify from './Notify'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = props => {
const alert = useAlert()

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
      <NavLink 
      to="/reminders/new" 
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>
      New Reminder
      </NavLink>
      <button 
      onClick={() => {
        alert.show(<Notify today_reminders={props.today_reminders} deleteReminder={props.deleteReminder} />)
        }}
      style={link}
      >Today's Reminders</button>
    </div>
  );
};

export default NavBar;