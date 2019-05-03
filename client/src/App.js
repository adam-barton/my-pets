import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import {connect} from 'react-redux';
import { fetchPets } from './actions/petActions';
import Header from './components/Header'
import PetProfileContainer from './containers/PetProfileContainer'
import NewPet from './components/NewPet';

class App extends Component {
  componentDidMount() {
    this.props.fetchPets()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <NavBar />
          <Route exact path="/new-pet" component={NewPet} />
          <Route exact path="/" component={PetProfileContainer} />
        </Router>
      </React.Fragment>
      
    );
  }
}
  
  export default connect(null, { fetchPets })(App);