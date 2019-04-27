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
        <PetsContainer />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Hello</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // catPics: state.catsReducer.pictures
  })
  
  export default connect(mapStateToProps, { fetchPets })(App);
