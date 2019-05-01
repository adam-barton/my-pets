import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { fetchPets } from './actions/petActions';
import PetsContainer from './containers/PetsContainer'

class App extends Component {
  componentDidMount() {
    this.props.fetchPets()
  }

  render() {
    return (
      <div className="App">
        <PetsContainer pets={this.props.pets} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pets: state.petsReducer.pets
  })
  
  export default connect(mapStateToProps, { fetchPets })(App);
