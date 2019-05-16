import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import {connect} from 'react-redux';
import { fetchPets } from './actions/petActions';
import {deleteReminder} from './actions/reminderActions'
import Header from './components/Header'
import Footer from './components/Footer'
import PetProfileContainer from './containers/PetProfileContainer'
import NewPet from './components/NewPet';
import RemindersForm from './components/RemindersForm';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <NavBar deleteReminder={this.props.deleteReminder} today_reminders={this.props.today_reminders} />
          <Route exact path="/new-pet" component={NewPet} />
          <Route exact path="/" component={PetProfileContainer} />
          <Route exact path="/reminders/new" component={RemindersForm} />
        </Router>
        <Footer />
      </React.Fragment>
      
    );
  }
}
const mapStateToProps = state => ({
  reminders: state.remindersReducer.reminders,
  today_reminders: state.remindersReducer.today_reminders
  })
  
  export default connect(mapStateToProps, { fetchPets, deleteReminder })(App);