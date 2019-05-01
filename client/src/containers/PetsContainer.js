import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addPet } from '../actions/petActions';
import NewPet from '../components/NewPet'
import PetProfileContainer from './PetProfileContainer'

class PetsContainer extends Component {
    render() {
    return(
        <div>
            <h1>Hello from PetsContainer.</h1>
            <PetProfileContainer pets={this.props.pets} />
            <NewPet addPet={this.props.addPet} />
        </div>
    )}

}


export default connect(null, {addPet})(PetsContainer);