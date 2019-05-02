import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import NavBar from './components/NavBar';
import {connect} from 'react-redux';
// import { fetchPets } from './actions/petActions';
import PetsContainer from './containers/PetsContainer'
import NewPet from './components/NewPet';

class App extends Component {
//   componentDidMount() {
//     this.props.fetchPets()
//   }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/new-pet" component={NewPet} />
          <Route exact path="/" component={PetsContainer} />
      </React.Fragment>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({
//   pets: state.petsReducer.pets
//   })
  
  // export default connect(mapStateToProps, { fetchPets })(App);
  export default App;